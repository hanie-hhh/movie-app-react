import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";

export const StyledIconButton = styled(IconButton)<{ isFavorite: boolean }>(({ isFavorite }) => ({
  transition: "transform 0.2s ease",
  transform: isFavorite ? "scale(1.2)" : "scale(1)",
  "&:hover": {
    transform: isFavorite ? "scale(1.2)" : "scale(1.1)",
  },
}));

export const iconColors = {
  favorite: "rgba(161, 98, 7, 1)",
  notFavorite: "rgba(161, 98, 7, 0.4)", 
  
};
