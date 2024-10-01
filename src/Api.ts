const API_KEY = "b61e9ee3c74d2abdf9814abb25f74500";
const BASE_URL = "https://api.themoviedb.org/3";
const DEFAULT_LANGUAGE = "en-US";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  overview: string;
  first_air_date?: string;
  name?: string;
}

export interface MovieDataResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}

const constructURL = (endpoint: string, params: Record<string, string | number> = {}): string => {
  const urlParams = new URLSearchParams({
    api_key: API_KEY,
    language: DEFAULT_LANGUAGE,
    ...params,
  });
  return `${BASE_URL}${endpoint}?${urlParams.toString()}`;
};

const fetchFromAPI = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const url = constructURL('/movie/popular', { page: 1 });
  const data = await fetchFromAPI<MovieDataResponse>(url);
  return data.results.slice(0, 10);
};

export const fetchAllByPage = async (page: number): Promise<MovieDataResponse> => {
  const url = constructURL('/trending/all/week', { page });
  return await fetchFromAPI<MovieDataResponse>(url);
};

export const fetchAllByQuery = async (query: string | null): Promise<MovieDataResponse> => {
  if (!query) {
    return { results: [] } as unknown as MovieDataResponse;
  }
  
  const url = constructURL('/search/multi', { query: encodeURIComponent(query) });
  return await fetchFromAPI<MovieDataResponse>(url);
};

export const fetchSeriesByPage = async (page: number): Promise<MovieDataResponse> => {
  const url = constructURL('/tv/popular', { page });
  return await fetchFromAPI<MovieDataResponse>(url);
};

export const fetchMovieByPage = async (page: number): Promise<MovieDataResponse> => {
  const url = constructURL('/movie/top_rated', { page });
  return await fetchFromAPI<MovieDataResponse>(url);
};

export const fetchPopularByPage = async (page: number): Promise<MovieDataResponse> => {
  const url = constructURL('/trending/all/day', { page });
  return await fetchFromAPI<MovieDataResponse>(url);
};
