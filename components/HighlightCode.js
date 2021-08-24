import highlight from "highlight.js";
import { useRef, useEffect } from "react";

const HighlightCode = ({ children, language }) => {
  const code = useRef();

  useEffect(() => {
    highlight.highlightBlock(code.current);
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
