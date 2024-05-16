import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Movie } from '@/types/Movie';
import React from 'react';

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
    console.log('movie', movie);
    return (
      <Card className="p-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{movie.Title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <p className="text-sm text-gray-600">{movie.Year}</p>
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
          <img src={movie.Poster} alt={movie.Title} className="w-48 h-64 object-cover mt-2 rounded" />
          </a>
        </CardContent>
      </Card>
    );
  };

export default MovieListItem;
