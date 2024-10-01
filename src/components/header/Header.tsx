import {
  FavoriteButton,
  HeaderContainer,
  Logo,
  NavButton,
  RightSection,
} from "./Header.styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { Stack } from "@mui/material";

const navButtons = [
  { label: "Movies", path: "/movie" },
  { label: "Series", path: "/series" },
  { label: "Popular & New", path: "/popular" },
];

const Header = () => {
  return (
    <HeaderContainer as="header">
      <RightSection>
        <Logo as={Link} to="/">
          MovieFlix
        </Logo>
        <Stack
          direction="row"
          spacing={{ sm: 2, xs: 0.5, md: 0.7 }}
          sx={{ paddingTop: { sm: 0, xs: "1rem" } }}
        >
          {navButtons.map(({ label, path }) => (
            <NavButton key={label} color="inherit" as={Link} to={path}>
              {label}
            </NavButton>
          ))}
          <FavoriteButton as={Link} to="/favorites">
            My Favorites <FavoriteIcon />
          </FavoriteButton>
        </Stack>
      </RightSection>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
