import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  return (
    <div>
      <div onClick={handleClick}>
        {!open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        {open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="close-caption"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {open && (
        <div className="dropdown" onClick={handleClick}>
          <ul className="dropdownmain">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Service</Link>
            </li>
            <li>
              <Link to="/Experience">Experience</Link>
            </li>
            <li>
              <Link to="/Work">Work</Link>
            </li>
            <li>
              {" "}
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              {" "}
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
