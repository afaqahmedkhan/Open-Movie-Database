import { Movie } from '@/types/Movie';
import { useEffect, useState } from 'react';
import { GroupedMoviesByYear } from '../workers/groupMoviesByYear.worker';

export const useGroupedMovies = (movies: Movie[]) => {
  const [groupedMovies, setGroupedMovies] = useState<GroupedMoviesByYear>({});

  useEffect(() => {
    const worker = new Worker(new URL('../workers/groupMoviesByYear.worker.ts', import.meta.url));

    worker.postMessage({ movies });

    worker.onmessage = (e: MessageEvent<GroupedMoviesByYear>) => {
      setGroupedMovies(e.data);
    };

    return () => {
      worker.terminate();
    };
  }, [movies]);

  return groupedMovies;
};
