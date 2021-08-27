import { useEffect, useState } from "react";
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = ({ toggle, onChange }) => {
  return (
    <Toggle
      checked={toggle}
      className="day-night-toggle"
      icons={{
        checked: <FontAwesomeIcon icon="moon" className="toggle-icon" />,
        unchecked: <FontAwesomeIcon icon="sun" className="toggle-icon" />,
      }}
      onChange={onChange}
    />
  );
};

export default ThemeToggle;
