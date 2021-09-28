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

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const redirect = () => {
    setTimeout(function(){
      window.location.href="/"
    }, 1000);
  }
  
  const LogoutView = () => {
  return props.token !== undefined ?
    <Collapse isOpen={isOpen} navbar>
      <Nav className='ms-auto align-items-center' navbar>
        <NavItem>
          <Link to='/movie-api'>Search Movies</Link>
        </NavItem>
        <NavItem className='px-5'>
          <Link to='/watch-list'>Watch List</Link>
        </NavItem>
        <NavItem>
          <Link to='/account'>Account</Link>
        </NavItem>
        <NavItem className='px-5'>
          <Button color="danger" variant="link" onClick={function(){props.clearToken(); redirect()}}>Logout</Button>
        </NavItem>
      </Nav>
    </Collapse> 
  : null
}
 
  return (
    <Container className='mt-5'>
      <Navbar expand='md' dark>
        <Link to='/' className='navbar-brand'>
          My Movie App
        </Link>
        <NavbarToggler onClick={toggle} />
        {LogoutView()}
      </Navbar>
    </Container>
  );
};



export default NavMenu;