import React from 'react';
import { Movie } from '../_types/Movie';
import MovieListItem from './MovieListItem';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map(movie => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
