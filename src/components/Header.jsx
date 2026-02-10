import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/target.gif'

function Header() {
  return (
    <>
    <Navbar className="bg-body-secondary p-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-center"
            />{' '}
            <b>FIRST PROJECT</b>
          </Navbar.Brand>
          <button ype="button" class="btn btn-primary">Log Out</button>
        </Container>    
      </Navbar>
    
    
    
    </>
  )
}

export default Header
