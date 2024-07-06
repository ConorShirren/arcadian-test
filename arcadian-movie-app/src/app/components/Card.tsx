import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { Movie } from '../types';
import React from 'react';

const CardComponent: React.FC<Movie> = ({
  id,
  title,
  year,
  poster,
}) => {
  return (
     <Link href={`/movies/${id}`} legacyBehavior>
     <Card className='my-3 p-3 rounded'>

      {poster !== 'N/A' && <Card.Img variant="top" src={poster} />}
      <Card.Body>
        <Card.Title as='div' className='product-title'>
        <strong>{title}</strong>
        </Card.Title>
        <Card.Text as='div'>Year: {year}</Card.Text>
        <br/>
        <Card.Text as='div'>IMDB ID: {id}</Card.Text>
      </Card.Body>

    </Card>
    </Link>
  );
};

export default CardComponent;
