import * as React from "react";

import {
  Container,
  ErrorBox,
  LoadingBox,
  NoMoviesBox,
  StyledGrid,
} from "./MovieGrid.styles";

import { Grid } from "@mui/material";
import type { Movie } from "../../Api";
import MovieCard from "../movieCard/MovieCard";

interface MovieGridProps {
  movies: Movie[];
  loading?: boolean;
  error?: string | null;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  hasMore?: boolean;
}

export default function MovieGrid({
  movies,
  loading = false,
  error = null,
  setPage,
  hasMore = false,
}: MovieGridProps) {
  const observer = React.useRef<IntersectionObserver | null>(null);

  const lastMovieElementRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage?.((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPage]
  );

  return (
    <Container>
      <StyledGrid container spacing={2}>
        {loading ? (
          <LoadingBox>Loading movies...</LoadingBox>
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <Grid
              item
              xs={12}
              sm={9}
              md={6}
              lg={4}
              key={`${movie.id}-${index}`}
              ref={index === movies.length - 1 ? lastMovieElementRef : null}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <NoMoviesBox>No movies found.</NoMoviesBox>
        )}
      </StyledGrid>
      {error && <ErrorBox>{error}</ErrorBox>}
    </Container>
  );
}
