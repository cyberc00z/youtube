import React from 'react';
import './App.css';
import Home from './components/Home';
import { Navbar,Nav,NavDropdown, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="app">
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Youtube-Automation</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#id">Id : </Nav.Link>
        <Nav.Link href="#password">Password : </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       <Home />
    </div>
  );
}

export default App;
