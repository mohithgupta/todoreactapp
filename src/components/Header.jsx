import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  const year = new Date().getFullYear();

  return (
    <header>
      <h1>
        <HighlightIcon /> Work Smart - Work Fast <HighlightIcon />
      </h1>
      <p className="designed">
         Designed by {":"}
        <a href="https://mohithgupta.github.io/" rel="noopener noreferrer" target="_blank">
          Mohith Gupta
        </a>

      </p>
      <p>Copyright ⓒ {year} . </p>
    </header>
  );
}

export default Header;
