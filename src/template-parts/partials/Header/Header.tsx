"use client";

import { useState } from "react";
import Link from "next/link";
import "./Header.scss";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">
          Your Name
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link href="/blog" className="header__link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/projects" className="header__link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="header__link">
                About
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="header__link">
                Newsletter
              </Link>
            </li>
          </ul>

          <button
            className={`header__theme-toggle ${!isDark ? "header__theme-toggle--light" : ""}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div
              className={`header__toggle-circle ${isDark ? "header__toggle-circle--active" : ""}`}
            >
              <svg
                className="header__icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {isDark ? (
                  // Moon icon
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                ) : (
                  // Sun icon
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
