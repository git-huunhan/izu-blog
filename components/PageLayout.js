import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";

import BlogNavbar from "./BlogNavbar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function PageLayout({ children, className }) {
  const { theme, stToggle, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme.type}>
      <Container>
        <BlogNavbar theme={theme} toggle={stToggle} toggleTheme={toggleTheme} />

        <div className={`page-wrapper ${className}`}>{children}</div>

        <footer className="page-footer">
          <div>
            <a href="#" style={{ textDecoration: "none" }}>
              Izu Blog with {" "}
              <FontAwesomeIcon fixedWidth size="sm" icon={faHeart} color="#ff5079"/>
              {" - "}
              Copyright © 2021
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
