import { Container } from "react-bootstrap";

import BlogNavbar from "./BlogNavbar";

import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";

export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme.type}>
      <Container>
        <BlogNavbar theme={theme} toggleTheme={toggleTheme} />

        <div className={`page-wrapper ${className}`}>{children}</div>

        <footer className="page-footer">
          <div>
            <a href="#" style={{ textDecoration: "none" }}>
              Izu Blog with ❤️, 2021
            </a>
          </div>
        </footer>
      </Container>

      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
}
