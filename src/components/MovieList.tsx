import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGroupedMovies } from '@/hooks/useGroupedMovies';
import { Movie } from '@/types/Movie';
import React from 'react';
import MovieListItem from './MovieListItem';

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  const groupedMovies = useGroupedMovies(movies);

  return (
    <div>
      {Object.keys(groupedMovies).map(year => (
        <div key={year} className="mb-6">
          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-xl">{year}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedMovies[year].map(movie => (
                  <MovieListItem key={movie.imdbID} movie={movie} />
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
