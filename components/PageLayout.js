import { Container } from "react-bootstrap";

import BlogNavbar from "./BlogNavbar";

export default function PageLayout({ children, className }) {
  return (
    <Container>
      <BlogNavbar />

      <div className={`page-wrapper ${className}`}>{children}</div>

      <footer className="page-footer">
        <div>
          <a href="#" style={{ textDecoration: "none" }}>
            Izu Blog with ❤️, 2021
          </a>
        </div>
      </footer>
    </Container>
  );
}
