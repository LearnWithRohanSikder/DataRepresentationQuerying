import './App.css';
//Import React component
import React, { Component } from 'react';
//import bootstrap for routing
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing Components
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Read } from './components/read';
import { Create } from './components/create';
//Importing Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Importing Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*Navbar from bootstrap*/}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/*Routes to component using path and href*/}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/read" element={<Read />} />
            <Route path="/create" element={<Create />} />
          </Routes>

          {/* <Header />
        <Content></Content>
        <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
