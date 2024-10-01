import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PopularPage from "./pages/PopularPage";
import { Provider } from "react-redux";
import SearchPage from "./pages/SearchPage";
import SeriesPage from "./pages/SeriesPage";
import { ThemeProvider } from "@mui/material/styles";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./hook/redux/Reducers";
import theme from "./theme";

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/popular" element={<PopularPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
