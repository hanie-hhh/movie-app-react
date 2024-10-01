import { Button, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import type { LinkProps } from "react-router-dom";
import { styled } from "@mui/material/styles";

interface LinkComponentProps extends LinkProps {
  to: string;
}

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem 0.5rem",
  alignItems: "flex-start",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
  padding: "1rem 1rem",

  },
  [theme.breakpoints.up("md")]: {
      padding: "1.5rem 1.5rem",

  },
  [theme.breakpoints.up("lg")]: {
      padding: "2.5rem 3rem",

  },
}));

export const Logo = styled(Typography)<LinkComponentProps>(({ theme }) => ({
  fontSize: "1.5rem",
  color: "white",
  fontStyle: "italic",
  letterSpacing: 1.5,
  textAlign: "start",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.3rem",
    letterSpacing: 2,
    textAlign: "center",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
    letterSpacing: 2.5,
  },
}));


export const RightSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  justifyContent: "flex-end",
 
 
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
   [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const NavButton = styled(Button)<LinkComponentProps>(({ theme }) => ({
  fontSize: "0.5rem",
  padding: "0.5rem 0.5rem",
  borderRadius: "1.5rem",
  backgroundColor: "rgba(74, 71, 67, 0.6)",
  color: "white",
  textTransform: "none",
  textDecoration: "none",
  alignItems:"center",
  justifyContent:"center",
  "&:hover": {
    backgroundColor: "rgba(161, 98, 7, 0.6)",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.9rem",
      padding: "0.8rem 1rem",

  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  padding: "0.8rem 1.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  padding: "1rem 2rem",
  },
}));

export const FavoriteButton = styled(Button)<LinkComponentProps>(({ theme }) => ({
  color: "rgba(161, 98, 7, 1)",
  textTransform: "none",
  paddingInline:"1rem",
  fontSize: "0.8rem",
    textDecoration: "none",
        display: "flex",
        alignItems:"center",
        gap:"0.5rem",

   
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
}));
