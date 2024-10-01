import { alpha, styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

export const Search = styled("div")(() => ({
  position: "absolute",
  top: 0,
  right: "1rem",
  borderRadius: "8px",
  backgroundColor: alpha("#fff", 0.35),
  "&:hover": {
    backgroundColor: alpha("#fff", 0.55),
  },
  marginLeft: 0,
  width: "10rem",
  "@media (min-width:600px)": {
    width: "auto",
    right: "0rem",
  },
}));

export const SearchIconWrapper = styled("div")(() => ({
  padding: "0 1rem",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "8px 8px 8px 0",
    paddingLeft: "calc(1em + 32px)",
    transition: "width 0.2s ease",
    "@media (min-width:600px)": {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
