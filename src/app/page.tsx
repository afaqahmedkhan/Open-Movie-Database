"use client"

import React, { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { useMovies } from '@/hooks/useMovies';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import MovieList from '@/components/MovieList';

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);
  const movies = useMovies(debouncedSearch);
  const { error } = useErrorHandler();

  return (
    <div className="container mx-auto px-4">
      <div className='flex flex-col items-start py-5'>
        <h1 className="text-2xl font-bold mb-4">OMDB</h1>
        <div className='flex flex-row items-center justify-start gap-x-2.5 w-full'>
          <Input 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search for movies..." 
            className="w-full sm:w-2/3 lg:w-1/2"
          />
        </div>
        {error && (
          <Alert className="mt-4 w-full sm:w-2/3 lg:w-1/2">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
