import { useState, useEffect } from 'react';
import { useErrorHandler } from './useErrorHandler';
import { useDebounce } from './useDebounce';
import { Movie } from '@/types/Movie';
import { getMovies } from '@/app/services/omdb';

export function useMovies(search: string): Movie[] {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { handleError } = useErrorHandler();
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (debouncedSearch.length > 2) {
          const fetchedMovies = await getMovies(debouncedSearch);
          setMovies(fetchedMovies);
          handleError(null); 
        } else {
          setMovies([]); 
        }
      } catch (error) {
        handleError((error as Error).message);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [debouncedSearch]);

  return movies;
}
