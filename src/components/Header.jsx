import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/target.gif'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="bg-body-secondary p-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-center"
            />{' '}
            <b>FIRST PROJECT</b>
          </Navbar.Brand>
          <Link to="/Login">
            <button type="button" className="btn btn-primary">Log Out</button>
          </Link>
        </Container>    
      </Navbar>
    
    
    
    </>
  )
}

export default Header
