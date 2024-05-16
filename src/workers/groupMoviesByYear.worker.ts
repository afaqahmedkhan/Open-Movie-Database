import { Movie } from "@/types/Movie";

export interface GroupMoviesByYearMessage {
  movies: Movie[];
}

export interface GroupedMoviesByYear {
  [year: string]: Movie[];
}

onmessage = function (e: MessageEvent<GroupMoviesByYearMessage>) {
  const movies = e.data.movies;
  const groupedMovies = movies.reduce((acc: GroupedMoviesByYear, movie) => {
    const year = movie.Year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(movie);
    return acc;
  }, {});
  postMessage(groupedMovies);
};
