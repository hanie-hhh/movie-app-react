import { ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from "./Action";

import type { FavoriteMoviesAction } from "./Action";
import type { Movie } from '../../Api';

interface FavoriteMoviesState {
  favorites: Movie[];
}

const initialState: FavoriteMoviesState = {
  favorites: [],
};

const favoriteMoviesReducer = (
  state: FavoriteMoviesState = initialState,
  action: FavoriteMoviesAction
): FavoriteMoviesState => {
  switch (action.type) {
    case ADD_FAVORITE_MOVIE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

export default favoriteMoviesReducer;
