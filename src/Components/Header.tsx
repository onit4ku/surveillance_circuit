import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import TranslatedText from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  return (
    <div className="header">
      <Navbar className="color-nav" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container className="container">
          <NavLink className="navbar-brand" to="/surveillance_circuit">
            SURVEILLANCE CIRCUIT
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle" className="navbar-toggle" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <NavLink className="navElement" to="surveillance_circuit/about">
                <TranslatedText textKey="menuLink-about" />
              </NavLink>
              <NavLink className="navElement" to="surveillance_circuit/results">
                <TranslatedText textKey="menuLink-results" />
              </NavLink>
              <NavLink className="navElement" to="surveillance_circuit/WNV">
                <TranslatedText textKey="menuLink-wnv" />
              </NavLink>
              <NavLink className="navElement" to="surveillance_circuit/Monkeypox">
                <TranslatedText textKey="menuLink-monkey" />
              </NavLink>
              <a
                className="navElement"
                href="https://www.clinbioinfosspa.es/COVID_circuit"
                target="_blank"
                rel="noreferrer"
                data-id="localNextrain"
              >
                COVID Circuit
              </a>
              <NavLink className="navElement" to="surveillance_circuit/contact">
                <TranslatedText textKey="menuLink-contact" />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <LanguageSwitcher language="es" />
            <LanguageSwitcher language="en" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
