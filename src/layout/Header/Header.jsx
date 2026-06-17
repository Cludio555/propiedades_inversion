import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'; // Importación obligatoria para moverse

export default function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" sticky="top">
      <Container>
        {/* 'to="/"' te lleva al inicio */}
        <Navbar.Brand as={Link} to="/">Real State Argentina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navega a la HomePage */}
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {/* Navega a la ContactoPage cambiando la pantalla */}
            <Nav.Link as={Link} to="/EnlacePage" className="btn btn-primary text-white px-3 ms-2">
              Abrir_Cuenta
            </Nav.Link>
            {/* Navega a la ContactoPage cambiando la pantalla */}
            <Nav.Link as={Link} to="/contacto" className="btn btn-primary text-white px-3 ms-2">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
