import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
		<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  as={Link} to='/'>Welcome !</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
          </Nav>
        </Container>
      	</Navbar>
		</div>
	)
}

export default NavBar;