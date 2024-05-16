"use client"

import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react'
import { getMovies } from './_apis/omdb';
import MovieList from './_components/MovieList';
import { Movie } from './_types/Movie';


export default function Home() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (search.length > 2) {
          const movies = await getMovies(search);
          setMovies(movies);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [search]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-start gap-x-2.5 py-5'>
      <h1>OMDB</h1>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
