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
          <Card className="p-4 bg-gray-950 text-white">
            <CardHeader>
              <CardTitle className="text-xl">{year}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex gap-4 flex-wrap md:flex-auto">
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
