import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  BackgroundBlur,
  Container,
  ImageContainer,
  LoadingContainer,
  NavButton,
  PosterImage,
  ReleaseDate,
  SlideContainer,
  StyledHeaderContainer,
  Swiper as StyledSwiper,
  Title,
} from "./Slider.styles";
import { CircularProgress, Typography } from "@mui/material";
import { Navigation, Pagination } from "swiper/modules";
import { useCallback, useEffect, useState } from "react";

import Header from "../header/Header";
import { SwiperSlide } from "swiper/react";
import { fetchPopularMovies } from "../../Api";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const SwiperComponent: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    } catch {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator message={error} />;

  return (
    <>
      <StyledHeaderContainer>
        <Header />
      </StyledHeaderContainer>
      <Container>
        <MovieSwiper movies={movies} />
      </Container>
    </>
  );
};

const MovieSwiper: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <StyledSwiper
    modules={[Navigation, Pagination]}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    pagination={{ clickable: true }}
    spaceBetween={60}
    slidesPerView={1}
    loop
  >
    <NavigationButton className="swiper-button-next" />
    <NavigationButton className="swiper-button-prev" />
    {movies.map((movie) => (
      <SwiperSlide key={movie.id}>
        <MovieSlide movie={movie} />
      </SwiperSlide>
    ))}
  </StyledSwiper>
);

const NavigationButton: React.FC<{ className: string }> = ({ className }) => (
  <NavButton type="button" className={className} />
);

const LoadingIndicator: React.FC = () => (
  <LoadingContainer>
    <CircularProgress />
  </LoadingContainer>
);

const ErrorIndicator: React.FC<{ message: string }> = ({ message }) => (
  <LoadingContainer>
    <Typography variant="h6" color="error">
      {message}
    </Typography>
  </LoadingContainer>
);

const MovieSlide: React.FC<{ movie: Movie }> = ({ movie }) => (
  <SlideContainer>
    <BackgroundBlur posterPath={movie.poster_path} />
    <Title variant="h1">{movie.title}</Title>
    <ReleaseDate variant="h5">{movie.release_date}</ReleaseDate>
    <ImageContainer>
      <PosterImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster of ${movie.title}`}
      />
    </ImageContainer>
  </SlideContainer>
);

export default SwiperComponent;
