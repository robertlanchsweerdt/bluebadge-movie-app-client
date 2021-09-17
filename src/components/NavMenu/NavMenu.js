import { useState } from 'react';

import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className='mt-5'>
      <Navbar expand='md' dark>
        <Link to='/' className='navbar-brand'>
          My Movie App
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto align-items-center' navbar>
            <NavItem>
              <Link to='/movie-api'>Search Movies</Link>
            </NavItem>
            <NavItem className='px-5'>
              <Link to='/watch-list'>Watch List</Link>
            </NavItem>
            <Button color='danger' text-color='white'>
              <Link to='/sign-in'>Sign In</Link>
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
