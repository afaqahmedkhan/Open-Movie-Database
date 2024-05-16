import { Movie } from "@/types/Movie";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getMovies(search: string): Promise<Movie[]> {
  const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "True") {
    console.log('data',data);
    return data.Search;
  } else {
    throw new Error(data.Error);
  }
}