import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    
        <Navbar expand="lg" bg='dark' variant='dark'>
      <Container>  
      <Navbar.Brand href="/">Timeline</Navbar.Brand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/content">DASHBOARD</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
            <Nav.Link >{sessionStorage.getItem("Username")}</Nav.Link>
            <Nav.Link >{sessionStorage.getItem("Role")}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navigation