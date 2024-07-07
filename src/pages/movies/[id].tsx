import { useEffect, useState } from 'react';

import { Card } from 'react-bootstrap';
import HeaderComponent from '@/app/components/Header';
import Image from 'next/image';
// pages/movies/[id].tsx
import { useRouter } from 'next/router';

interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Plot: string;
  Poster: string;
  Runtime: string;
  Actors: string;
  Language: string;
  imdbRating: string;
  Awards: string;
  BoxOffice: string;
}

const MovieDetails = () => {
  const router = useRouter();
  const id = router.query.id;
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

  if (!movie) return <div>Loading... </div>;

  return (
    <div>
      <HeaderComponent/>
      <Card className='my-3 p-3 rounded'>
      {movie.Poster !== 'N/A' && <Card.Img variant="top" src={movie.Poster} />}
        <Card.Body>
          <Card.Title as='div' className='product-title'>
          <strong>{movie.Title}</strong>
          </Card.Title>
          <br/>
          <Card.Text as='div'>{movie.Plot}</Card.Text>
          <br/>
          <Card.Text as='div'><b>Released:</b> {movie.Year}</Card.Text>
          <Card.Text as='div'><b>Genre:</b> {movie.Genre}</Card.Text>
          <Card.Text as='div'><b>Runtime:</b> {movie.Runtime}</Card.Text>
          <Card.Text as='div'><b>Main Cast:</b> {movie.Actors}</Card.Text>
          <Card.Text as='div'><b>Languages:</b> {movie.Language}</Card.Text>
          <Card.Text as='div'><b>Awards:</b> {movie.Awards}</Card.Text>
          <Card.Text as='div'><b>Box Office:</b> {movie.BoxOffice}</Card.Text>
          <Card.Text as='div'><b>IMDB Score:</b> {movie.imdbRating}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDetails;