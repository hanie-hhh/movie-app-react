import type { Movie } from '../../Api';

export const ADD_FAVORITE_MOVIE = "ADD_FAVORITE_MOVIE" as const;
export const REMOVE_FAVORITE_MOVIE = "REMOVE_FAVORITE_MOVIE" as const;

export const addFavoriteMovie = (movie: Movie) => ({
  type: ADD_FAVORITE_MOVIE,
  payload: movie,
});

export const removeFavoriteMovie = (id: number) => ({
  type: REMOVE_FAVORITE_MOVIE,
  payload: id,
});

export type FavoriteMoviesAction =
  | ReturnType<typeof addFavoriteMovie>
  | ReturnType<typeof removeFavoriteMovie>;
