import React from "react";
import  {
    Container,
    Nav,
    Navbar,
} from "react-bootstrap"
import { Link } from "react-router-dom"






function NavBar() {
const userEmail = localStorage.getItem("email");


const logOut = () => {
  localStorage.setItem("uid" , "")
  localStorage.setItem("email" , "")
}
 
  return (
    <>
    <Navbar className="Navbar" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#home">Todo App </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Nav-Box">
            <Nav.Link className="Nav-Link" style={{color : "white"}} href="#">{userEmail}</Nav.Link>
              <Link to="/">
                <button onClick={logOut}>
                  logout
                  <br />
                </button>
              </Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar;
