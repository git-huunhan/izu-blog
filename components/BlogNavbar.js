import { Navbar, Nav, Image } from "react-bootstrap";
import Link from "next/link";

import ThemeToggle from "components/ThemeToggle";

const BlogNavbar = ({ theme, toggle, toggleTheme }) => {
  return (
    <Navbar
      variant={theme}
      fixed="top"
      className="iz-navbar iz-nav-base"
      expand="lg"
    >
      
      <div className="container">
        <Navbar.Brand className="iz-navbar-brand">
          <div className="d-flex">
            <Image
              width="40px"
              height="40px"
              src="https://firebasestorage.googleapis.com/v0/b/happy-tea-1a89b.appspot.com/o/izu-logo.svg?alt=media&token=0a5ff27e-215b-4593-834f-38abfb5f5a4a"
              alt="logo"
            />

            <div className="ms-2 iz-navbar-brand-name">
              <Link href="/">izu blog</Link>
            </div>
          </div>
        </Navbar.Brand>

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
          </Nav>
          <ThemeToggle toggle={toggle} onChange={toggleTheme} />
     
      </div>
    </Navbar>
  );
};

export default BlogNavbar;
