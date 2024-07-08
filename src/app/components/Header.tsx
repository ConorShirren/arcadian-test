import { Container, Navbar } from 'react-bootstrap';

import Link from 'next/link';

const HeaderComponent = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container className="d-flex justify-content-center">
      <Navbar.Brand href="/">Super Simple Arcadian Movie API</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;