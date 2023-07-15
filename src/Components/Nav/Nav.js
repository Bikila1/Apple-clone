import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Link className="nav-link" to="/mac">
                Mac
              </Link>
              <Link className="nav-link" to="/iphone">
                iphone
              </Link>
              <Link className="nav-link" to="/ipad">
                ipad
              </Link>
              <Link className="nav-link" to="/watch">
                watch
              </Link>
              <Link className="nav-link" to="/tv">
                tv
              </Link>
              <Link className="nav-link" to="/music">
                Music
              </Link>
              <Link className="nav-link" to="/support">
                Support
              </Link>
              <Link className="nav-link" to="/search">
                <img src={search} alt="" />
              </Link>
              <Link className="nav-link" to="/cart">
                <img src={cart} alt="" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
