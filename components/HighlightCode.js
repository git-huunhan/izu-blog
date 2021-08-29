import { useRef, useEffect } from "react";
import highlight from "highlight.js";

const HighlightCode = ({ children, language }) => {
  const code = useRef();

  useEffect(() => {
    highlight.highlightElement(code.current);
  }, []);

  return (
    <pre className="code-pre">
      <code ref={code} className={language}>
        {children}
      </code>
    </pre>
  );
};

export default HighlightCode;
