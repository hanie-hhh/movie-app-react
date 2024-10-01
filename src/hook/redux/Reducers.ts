import { combineReducers } from "redux";
import favoriteMoviesReducer from "./favoriteMoviesReducer.ts";

const rootReducer = combineReducers({
  favoriteMovies: favoriteMoviesReducer,
});

export default rootReducer;
