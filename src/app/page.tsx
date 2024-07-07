// pages/index.tsx
"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/yeti/bootstrap.min.css';

import { Button, Col, Form, FormControl, InputGroup, Navbar, Row } from 'react-bootstrap';
import { FormEvent, useState } from 'react';

import CardComponent from './components/Card';
import HeaderComponent from './components/Header';

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
      <HeaderComponent />
       <div className="container">
      <div>
        <Form onSubmit={searchMovies}>
          <Form.Group controlId="movieTitle">
            <InputGroup>
              <FormControl
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter movie title"
                className="fixed-width-input" // Apply custom CSS class if needed
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
      <div>
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
    </div>
  );
}