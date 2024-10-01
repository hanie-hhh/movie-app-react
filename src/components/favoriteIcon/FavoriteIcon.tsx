import { StyledIconButton, iconColors } from "./FavoriteIcon.styles";
import { addFavoriteMovie, removeFavoriteMovie } from "../../hook/redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { Movie } from "../../Api";

const HeartToggle: React.FC<{ movie: Movie }> = ({ movie }) => {
  const dispatch = useDispatch();

  const favoriteMovies = useSelector(
    (state: { favoriteMovies: { favorites: Movie[] } }) =>
      state.favoriteMovies.favorites
  );

  const isMovieFavorite = favoriteMovies.some(
    (favMovie) => favMovie.id === movie.id
  );

  const [isFavorite, setIsFavorite] = useState(isMovieFavorite);

  useEffect(() => {
    setIsFavorite(isMovieFavorite);
  }, [isMovieFavorite]);

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavoriteMovie(movie));
    } else {
      dispatch(removeFavoriteMovie(movie.id));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <StyledIconButton onClick={handleToggleFavorite} isFavorite={isFavorite}>
      {isFavorite ? (
        <FavoriteIcon sx={{ color: iconColors.favorite }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: iconColors.notFavorite }} />
      )}
    </StyledIconButton>
  );
};

export default HeartToggle;
