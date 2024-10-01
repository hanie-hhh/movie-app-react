import { Container, NoMoviesMessage, Title } from "./MediaPage.styles";
import type { Movie, MovieDataResponse } from "../../Api";
import {
  fetchAllByPage,
  fetchAllByQuery,
  fetchMovieByPage,
  fetchPopularByPage,
  fetchSeriesByPage,
} from "../../Api";
import { useCallback, useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import Header from "../../components/header/Header";
import MovieGrid from "../../components/movieGrid/MovieGrid";
import { useSelector } from "react-redux";

interface ContentPageProps {
  type: "home" | "search" | "favorites" | "movie" | "series" | "popular";
  query?: string;
}

const ContentPage: React.FC<ContentPageProps> = ({ type, query }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const favoriteMovies = useSelector(
    (state: { favoriteMovies: { favorites: Movie[] } }) =>
      state?.favoriteMovies?.favorites || []
  );

  const getMoviesByType = useCallback(async () => {
    try {
      let movieData: MovieDataResponse;
      switch (type) {
        case "home":
          movieData = await fetchAllByPage(page);
          break;
        case "movie":
          movieData = await fetchMovieByPage(page);
          break;
        case "series":
          movieData = await fetchSeriesByPage(page);
          break;
        case "popular":
          movieData = await fetchPopularByPage(page);
          break;
        case "search":
          if (!query || query.trim() === "") {
            setMovies([]);
            setLoading(false);
            return;
          }
          movieData = await fetchAllByQuery(query);
          break;
        default:
          throw new Error("Invalid content type.");
      }
      setMovies((prevMovies) => {
        if (type === "search" && movieData.results.length === 0) {
          return [];
        }
        return type === "search"
          ? movieData.results
          : [...prevMovies, ...movieData.results];
      });

      setHasMore(movieData.page < movieData.total_pages);
    } catch (err) {
      setError((err as Error).message || "Failed to load movies.");
    } finally {
      setLoading(false);
    }
  }, [type, page, query]);

  useEffect(() => {
    if (["home", "movie", "series", "popular", "search"].includes(type)) {
      getMoviesByType();
    } else if (type === "favorites") {
      setLoading(false);
    }
  }, [getMoviesByType, type]);

  const noMoviesMessage =
    type === "favorites" && favoriteMovies.length === 0
      ? "No favorite movies yet!"
      : type === "search" && movies.length === 0
      ? "No movie found!"
      : null;

  return (
    <Container>
      {type !== "home" && <Header />}
      <Title variant="h3">
        {type === "favorites"
          ? "Favorite Movies"
          : type === "search"
          ? `Search Results for "${query}"`
          : type === "series"
          ? "Popular TV Shows"
          : type === "popular"
          ? "Trending"
          : "Top Rated Movies"}
      </Title>
      {loading && <CircularProgress />}
      {noMoviesMessage ? (
        <NoMoviesMessage variant="h2">{noMoviesMessage}</NoMoviesMessage>
      ) : (
        <MovieGrid
          movies={type === "favorites" ? favoriteMovies : movies}
          loading={loading}
          error={error}
          setPage={
            type !== "search" && type !== "favorites" ? setPage : undefined
          }
          hasMore={
            type !== "search" && type !== "favorites" ? hasMore : undefined
          }
        />
      )}
    </Container>
  );
};

export default ContentPage;
