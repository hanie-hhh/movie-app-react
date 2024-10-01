import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import StarIcon from "@mui/icons-material/Star";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: alpha("#fff", 0.1),
  padding: "16px",
  transition: "height 0.3s ease",
  cursor: "pointer",
}));

export const Header = styled(Box)({
  height: "8vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Title = styled(Typography)({
  color: "#ffffff",
  display: "inline",
});

export const ReleaseYear = styled(Typography)({
  color: "#ffffff",
  display: "inline",
  marginLeft: "4px",
});

export const Rating = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "0.4rem",
});

export const StarIconStyled = styled(StarIcon)({
  color: "yellow",
  marginRight: "4px",
});

export const RatingValue = styled(Typography)({
  color: "#ffffff",
  fontWeight: 700,
});

export const Overview = styled(Box)({
  color: "#ffffff",
  width: "100%",
  textAlign: "start",
  height: "25vh",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 10,
});

export const OverviewText = styled(Typography)({
  fontWeight: 200,
});

export const GenreBox = styled(Box)({
  backgroundColor: "rgba(161, 98, 7, 0.6)",
  color: "white",
  padding: "4px 8px",
  borderRadius: "4px",
  fontWeight: 500,
  fontSize: ".9rem",
});
export const MovieImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "25vh",
  objectFit: "cover",
  borderRadius: "25px",
  transition: "height 0.3s ease", 
}));