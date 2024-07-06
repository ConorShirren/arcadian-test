// pages/index.tsx
"use client"

import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FormEvent, useState } from 'react';

import CardComponent from './components/Card';
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
      <Form onSubmit={searchMovies}>
      <Form.Group controlId="movieTitle">
        <Form.Control 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter movie title" 
          style={{ width: '300px' }}
        />
      <Button variant="primary" type="submit">
        Search
      </Button>
      </Form.Group>
    </Form>
      <div>
      <nav className="navbar bg-body-tertiary">
      </nav>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.imdbID} sm={12} md={6} lg={5} xl={3}>
            <CardComponent 
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
            />
          </Col>
        ))}
      </Row>
    </div>
    </div>
    
  );
}