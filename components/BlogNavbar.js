import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

import ThemeToggle from "components/ThemeToggle";

const BlogNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar
      variant={theme}
      className="iz-navbar iz-nav-base"
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="iz-navbar-brand">
        <Link href="/">Izu blog</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            as={() => (
              <a
                href="https://github.com/git-huunhan"
                target="_blank"
                rel="noreferrer"
                className="iz-navbar-item iz-navbar-link"
              >
                About Me
              </a>
            )}
          />
          <ThemeToggle onChange={toggleTheme} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
