"use server"

import { Movie } from "@/types/Movie";
import { getMovieDetails, getMovies } from "../api/omdb";

/**
 * Action that calls movies API based on a search query
 */
export async function getMoviesAction(search: string): Promise<Movie[]> {
    const movies = await getMovies(search);
    return movies;
}
/**
 * Action that calls movies API to get movie details
 */
export async function getMovieDetailsAction(id: string): Promise<Movie> {
  const movie = await getMovieDetails(id);
  return movie;
}