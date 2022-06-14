import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav>
      <header>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
          </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
