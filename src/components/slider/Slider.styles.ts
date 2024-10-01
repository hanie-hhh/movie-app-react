import Box from "@mui/material/Box";
import { Swiper as OriginalSwiper } from "swiper/react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const Swiper = styled(OriginalSwiper)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
}));
export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "80vh",
  width: "100vw",
  paddingBottom: "15rem",
}));

export const StyledHeaderContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2,
}));

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

export const SlideContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const BackgroundBlur = styled(Box)<{ posterPath: string }>(({ posterPath }) => ({
  backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterPath})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
  filter: "blur(20px)",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
}));

export const Title = styled(Typography)(({ theme }) => ({
  position: "absolute",
  color: "#ffffff",
  top: "20rem",
  right: "3rem",
  fontWeight: 500,
  zIndex: 3,
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
      fontSize: "2rem",
       

  [theme.breakpoints.up("sm")]: {
    fontSize: "4rem",
    top: "15rem",
    right: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem",
    top: "15rem",
    right: "10rem",
  },
}));

export const ReleaseDate = styled(Typography)(({ theme }) => ({
  position: "absolute",
  color: "#ffffff",
  top: "24rem",
  right: "5rem",
  fontSize: "0.8rem",
  fontWeight: 500,
  zIndex: 3,
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  
   [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem",
    top: "20rem",
    right: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    top: "22rem",
    right: "10rem",
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  borderRadius: "10px",
  textAlign: "center",
  paddingTop: "7rem",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "12rem",
  },
}));

export const PosterImage = styled("img")(({ theme }) => ({
  width: "55vh",
  height: "85vh",
  objectFit: "cover",
  borderRadius: 25,
}));

export const NavButton = styled("button")(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "transparent",
  border: "none",
}));
