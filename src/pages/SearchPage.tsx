import ContentPage from "./mediaPage/MediaPage";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  return <ContentPage type="search" query={query || ""} />;
}
