import { Movie } from "@/types/Movie";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const BASE_OMDB_URL = "https://www.omdbapi.com/?";

/**
 * Fetches movies from the OMDb API based on a search query
 * @param {string} search - The search query
 * @returns {Promise<Movie[]>} - An array of movies that match the search query
 */

export async function getMovies(search: string): Promise<Movie[]> {
  const response = await fetch(`${BASE_OMDB_URL}s=${search}&type=movie&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "True") {
    return data.Search;
  } else {
    throw new Error(data.Error);
  }
}

/**
 * Fetches the details of a movie from the OMDb API based on its ID
 * @param {string} id - The ID of the movie on IMDb
 * @returns {Promise<Movie>} - The details of the movie
 */
export async function getMovieDetails(id: string): Promise<Movie> {
  const response = await fetch(`${BASE_OMDB_URL}i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "True") {
    return data;
  } else {
    throw new Error(data.Error);
  }
}