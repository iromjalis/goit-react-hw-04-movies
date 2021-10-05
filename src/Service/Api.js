import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0dba41d64d38d3842f2e56a581ca4bf3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

async function fetchFilms(url, query) {
  const response = await axios(url, { params: { query } });
  return response.data;
}

export async function fetchPopularMovies() {
  const response = await fetchFilms('trending/movie/day');
  return response.results;
}

export async function fetchMoviesById(id) {
  const response = await fetchFilms(`movie/${id}`);
  return response;
}
export async function fetchMoviesCastById(id) {
  const response = await fetchFilms(`movie/${id}/credits`);
  return response.cast;
}
export async function fetchMoviesReviewById(id) {
  const response = await fetchFilms(`movie/${id}/reviews`);
  return response.results;
}
export async function fetchMoviesByQuery(query) {
  const response = await fetchFilms(`search/movie`, query);
  return response.results;
}
