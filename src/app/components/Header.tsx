import Link from 'next/link';
import { Navbar } from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <Navbar bg="light" variant="light" className="mb-4">
      <Navbar.Brand>
        <Link href="/" passHref legacyBehavior>
          <a >Super Simple Arcadian Movie API</a>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default HeaderComponent;