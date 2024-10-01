import { Box, styled } from "@mui/material";

import ContentPage from "./mediaPage/MediaPage";
import Slider from "../components/slider/Slider";

const Container = styled(Box)(({ theme }) => ({
  height: "100%",
  background:
    "linear-gradient(to bottom right, black 50%, rgba(161, 98, 7, 0.6))",
}));

export default function HomePage() {
  return (
    <Container>
      <Slider />
      <ContentPage type="home" />
    </Container>
  );
}
