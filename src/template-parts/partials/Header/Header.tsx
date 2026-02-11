"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import logo from "../../../images/header/logo.svg";


const MOBILE_BREAKPOINT = 992;

const Header = () => {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navRef = useRef<HTMLElement | null>(null);
  const burgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuActive &&
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(e.target as Node) &&
        !burgerRef.current.contains(e.target as Node)
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuActive]);
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleMenu = () => setMenuActive((prev) => !prev);
  const closeMenu = () => setMenuActive(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const linkClass = (href: string) =>
    `header__link ${pathname === href ? "active" : ""}`;

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">
          <img src={logo.src} alt="Header logo" />
        </Link>

        <div
          ref={burgerRef}
          className={`header__burger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span />
        </div>

        <nav
          ref={navRef}
          className={`header__nav ${menuActive ? "active" : ""}`}
        >
          <Link href="/blog" className={linkClass("/")} onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/projects" className={linkClass("/projects")} onClick={closeMenu}>
            Projects
          </Link>
          <Link
            href="/about"
            className={linkClass("/about")}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/newsletter"
            className={linkClass("/newsletter")}
            onClick={closeMenu}
          >
            Newsletter
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
