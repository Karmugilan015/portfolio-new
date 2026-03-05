import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function MyNavbar() {
    return (
        <Navbar expand="md"  variant="dark" className="p-3">
          <Container>
            <Navbar.Brand href="/">
              <h2 className="m-0">My Portfolio</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <FaBars />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-center">
                <Nav.Link href="#home"className="link">Home</Nav.Link>
                <Nav.Link href="#projects"className="link">Projects</Nav.Link>
                <Nav.Link href="#about"className="link">MY Courses</Nav.Link>
                <Nav.Link href="#skills"className="link">Skills</Nav.Link>
                <Nav.Link href="#contact"className="link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default MyNavbar