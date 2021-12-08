import React from 'react';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";
import ForgetPassword from './components/ForgetPassword';

import { Navbar,Nav,Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//import {Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
      
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route  path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} /> 
       <Route path="/forget-password" element={<ForgetPassword />} />
     </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
