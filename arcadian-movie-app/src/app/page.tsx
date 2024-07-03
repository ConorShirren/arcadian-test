// pages/index.tsx
"use client"

import { FormEvent, useState } from 'react';

import Image from "next/image";
import Link from 'next/link';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export default function Home() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/movies?title=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form onSubmit={searchMovies}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter movie title" 
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link href={`/movies/${movie.imdbID}`} legacyBehavior>
              <a>
                <h2>{movie.Title} ({movie.Year})</h2>
                {movie.Poster !== 'N/A' && <Image width="100" height="100" src={movie.Poster} alt={`${movie.Title} poster`} />}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}