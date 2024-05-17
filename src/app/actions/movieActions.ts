"use server"

import { Movie } from "@/types/Movie";
import { getMovieDetails, getMovies } from "../api/omdb";

export async function getMoviesAction(search: string): Promise<Movie[]> {
    const movies = await getMovies(search);
    return movies;
}

export async function getMovieDetailsAction(id: string): Promise<Movie> {
  const movie = await getMovieDetails(id);
  return movie;
}