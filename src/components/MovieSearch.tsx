"use client"

import React, { useCallback, useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import MovieList from '@/components/MovieList';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Movie } from '@/types/Movie';
import { getMoviesAction } from '@/app/actions/movieActions';
import { Badge } from '@/components/ui/badge';
import { SkeletonCard } from '@/components/ui/skeletoncard';

export default function MovieSearch() {
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getMoviesAction(search);
      setMovies(res);
    } catch (e) {
      setMovies([]);
      setError("An error occurred while fetching movies. Please try again with different search.");
    } finally {
      setLoading(false);
    }
  }, [search]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    setError("");
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchMovies();
    }
  }, [fetchMovies]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-start py-5">
        <h1 className="text-2xl font-bold mb-4">
          <Badge variant="secondary" className="bg-amber-300 hover:bg-amber-200">OMDB App</Badge>
        </h1>
        <div className="flex flex-row items-center justify-start gap-x-2.5 w-full">
          <Input
            value={search}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies..."
            className="w-full sm:w-2/3 lg:w-1/2"
          />
          <Button variant="ghost" id="search" className="text-white" onClick={fetchMovies}>
            <Search />
          </Button>
        </div>
        {error && (
          <Alert className="mt-4 w-full sm:w-2/3 lg:w-1/2">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
      {loading ? (
        <div className="mt-6">
          <SkeletonCard />
        </div>
      ) : (
        movies && <MovieList movies={movies} />
      )}
    </div>
  );
}
