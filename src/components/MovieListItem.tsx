import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Movie } from '@/types/Movie';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <Card className="p-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{movie.Title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Link href={`/movie/${movie.imdbID}`}>
          <p className="text-sm text-gray-600">{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} className="w-48 h-64 object-cover mt-2 rounded" />
        </Link>
        <Button variant="outline" className='my-2'>
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
            Link to IMDB page
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieListItem;
