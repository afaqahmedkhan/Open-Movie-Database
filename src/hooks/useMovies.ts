import { getMovies } from '@/app/services/omdb';
import { Movie } from '@/app/_types/Movie';
import { useState, useEffect } from 'react';
import { useErrorHandler } from './useErrorHandler';

export function useMovies(search: string): Movie[] {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (search.length > 2) {
          const movies = await getMovies(search);
          setMovies(movies);
        }
        handleError(null); 
      } catch (error) {
        handleError((error as Error).message);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [search, handleError]);

  return movies;
}
