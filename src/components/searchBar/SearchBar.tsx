import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchAppBar.styles";

import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchAppBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: { key: string }) => {
    if (event.key === "Enter") {
      navigate(`/search-page?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </Search>
    </Toolbar>
  );
}
