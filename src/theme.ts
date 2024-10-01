import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#dc004e",
      contrastText: "#fff",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
});
export default theme;
