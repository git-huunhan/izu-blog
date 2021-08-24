import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const BlogNavbar = () => {
  return (
    <Navbar className="iz-navbar iz-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="iz-navbar-brand">
        <Link href="/">Izu blog</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            as={() => (
              <Link href="/">
                <a className="iz-navbar-item iz-navbar-link">Home</a>
              </Link>
            )}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
