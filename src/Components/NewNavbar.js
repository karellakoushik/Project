import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NewNavbar() {

    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/machines">Machines</Nav.Link>
            <Nav.Link href="/check-network-traffic">Check network traffic</Nav.Link>
            <Nav.Link href="/domains">Domains</Nav.Link>
            <Nav.Link href="/internet-speed">Internet Speed</Nav.Link>
            <Nav.Link href="/logs">Logs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}


