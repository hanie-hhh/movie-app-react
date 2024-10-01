import { Box, Stack } from "@mui/material";
import {
  Container,
  GenreBox,
  Header,
  MovieImage,
  Overview,
  OverviewText,
  Rating,
  RatingValue,
  ReleaseYear,
  StarIconStyled,
  Title,
} from "./MovieCard.styles";
import { useRef, useState } from "react";

import FavoriteIcon from "../favoriteIcon/FavoriteIcon";
import type { Movie } from "../../Api";
import { getGenres } from "./genreUtils";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : movie.first_air_date?.split("-")[0] || "";

  const genres = getGenres(movie.genre_ids || []);

  const handleCardClick = () => {
    setIsExpanded((prevState) => !prevState);
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container ref={cardRef} onClick={handleCardClick}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          height: isExpanded ? "40vh" : "25vh",
        }}
      />
      <Header>
        <Box>
          <Title variant="h6">{movie.title || movie.name}</Title>
          <ReleaseYear variant="subtitle2">({releaseYear})</ReleaseYear>
        </Box>
        <FavoriteIcon movie={movie} />
      </Header>
      <Rating>
        <StarIconStyled />
        <RatingValue variant="body2">
          {movie.vote_average !== undefined && !Number.isNaN(movie.vote_average)
            ? movie.vote_average.toFixed(1)
            : "---"}
        </RatingValue>
      </Rating>
      {isExpanded && (
        <Overview>
          <OverviewText variant="body1">{movie.overview}</OverviewText>
        </Overview>
      )}
      <Stack direction="row" spacing={{ sm: 1.2, xs: 1 }}>
        {genres.slice(0, 3).map((genre) => (
          <GenreBox key={genre}>{genre}</GenreBox>
        ))}
        {genres.length > 3 && <GenreBox>...</GenreBox>}
      </Stack>
    </Container>
  );
}
