import {React, useState} from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  FormControl,
  Button,
  Modal,
  Container
} from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import brainster_space_logo from "../images/brainster_space_logo.svg";
import "./Navigationbar.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";




function Navigationbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
     <Navbar bg="transparent" expand="lg" className="Navv">
     <Navbar.Brand href="/">
          <img
            src={brainster_space_logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
    <Nav.Link
            className="lin text-uppercase ml-10"
            href="eventspace"
            style={{ color: "black" }}
          >
            Настани
          </Nav.Link>
          <Nav.Link
            className="lin text-uppercase"
            href=""
            style={{ color: "black" }}
          >
            CO-WORKING
          </Nav.Link>
          <Nav.Link
            className="lin text-uppercase"
            href="/akademii "
            style={{ color: "black" }}
          >
            Академии
          </Nav.Link>
          <Nav.Link
            className="lin text-uppercase"
            href="/eventspace "
            style={{ color: "black" }}
          >
            Простор за настани
          </Nav.Link>
          <Nav.Link
            className="lin"
            href="/partnerstva"
            style={{ color: "black" }}
          >
            Партнерства
          </Nav.Link>
      </Nav>
    <Form inline>
          <Button className="but" variant="dark text-warning" onClick={handleShow}>
            <BsPlus />
            Приклучи се
          </Button>
          <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title><b>Приклучи се</b></Modal.Title>
        </Modal.Header>
        <Form>
  <Form.Group controlId="formGroupEmail" className="ml-2 mr-2">
    <Form.Label><b>Име</b></Form.Label>
    <Form.Control type="First name" placeholder="First name" size="sm" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword" className="ml-2 mr-2">
    <Form.Label><b>Презиме</b></Form.Label>
    <Form.Control type="Last name" placeholder="Last name" size="sm"/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword" className="ml-2 mr-2">
    <Form.Label><b>Email адреса</b></Form.Label>
    <Form.Control type="Email address" placeholder="Email address" size="sm" />
  </Form.Group>
</Form>
        <Modal.Footer>
          <Button className="isk" variant="bg-warning" onClick={handleClose}>
            Исклучи
          </Button>
          <Button className="but" variant="dark text-warning" onClick={handleClose}>
          <FaArrowRight/>  Испрати Форма
          </Button>
        </Modal.Footer>
      </Modal>
        </Form>
  </Navbar.Collapse>
</Navbar>

    </Container>
  );
}

export default Navigationbar;
