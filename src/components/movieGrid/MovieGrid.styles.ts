import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.breakpoints.down("sm") ? "3rem" : "2rem",
}));

export const StyledGrid = styled(Grid)({
  justifyContent: "center",
});

export const LoadingBox = styled(Box)({
  textAlign: "center",
});

export const NoMoviesBox = styled(Box)({
  textAlign: "center",
  fontSize: "1.5rem",
});

export const ErrorBox = styled(Box)({
  textAlign: "center",
  color: "red",
});
