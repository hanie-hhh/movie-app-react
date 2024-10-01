import Typography from "@mui/material/Typography"
import { styled } from "@mui/system";

export const Container = styled("div")({
  height: "100%",
  minHeight: "100vh",
  background: "linear-gradient(to bottom right, black 50%, rgba(161, 98, 7, 0.6))",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  padding: "0 3rem",
  fontSize: "1.5rem",

  [theme.breakpoints.up("sm")]: {
    padding: "2rem 2rem",
    fontSize: "2rem",
    
  },
  [theme.breakpoints.up("md")]: {
    padding: "3rem 3rem",
    fontSize: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem",
  },
}));

export const NoMoviesMessage = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  textAlign: "center",
  marginTop: "20vh",
  fontSize: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem",
  },
}));
