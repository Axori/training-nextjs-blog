import React from 'react';
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch.jsx";


const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/pages/about">About</Link>
      </li>
    </ul>
    <ThemeSwitch/>
    <style jsx>
      {`
        nav {
          display: flex;
          justify-content: space-between;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          display: inline;
        }

        li:not(:first-child) {
          margin-left: 1rem;
        }
      `}
    </style>

  </nav>
);

export default NavBar;
