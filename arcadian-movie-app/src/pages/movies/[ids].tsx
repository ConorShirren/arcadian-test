import { useEffect, useState } from 'react';

// pages/movies/[id].tsx
import { useRouter } from 'next/router';

interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Plot: string;
  Poster: string;
}

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      const fetchMovie = async () => {
        const response = await fetch(`/api/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      };
      fetchMovie();
    }
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Plot}</p>
      {movie.Poster !== 'N/A' && <img src={movie.Poster} alt={`${movie.Title} poster`} />}
    </div>
  );
};

export default MovieDetails;