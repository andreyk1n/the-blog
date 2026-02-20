"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";

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
          <svg
            width="98"
            height="15"
            viewBox="0 0 98 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.43757e-05 2.40749V0.198686H11.6052V2.40749H7.10942V14.7441H4.49578V2.40749H4.43757e-05ZM13.8424 14.7441V0.198686H16.4773V6.35636H23.2174V0.198686H25.8594V14.7441H23.2174V8.56516H16.4773V14.7441H13.8424ZM28.7252 14.7441V0.198686H38.1854V2.40749H31.3601V6.35636H37.6954V8.56516H31.3601V12.5353H38.2422V14.7441H28.7252ZM45.8346 14.7441V0.198686H51.4027C52.4539 0.198686 53.3275 0.364405 54.0235 0.695844C54.7242 1.02255 55.2474 1.46999 55.5931 2.03817C55.9435 2.60636 56.1187 3.2503 56.1187 3.96999C56.1187 4.56185 56.005 5.06848 55.7777 5.48988C55.5505 5.90655 55.2451 6.24509 54.8615 6.5055C54.478 6.76592 54.0495 6.95295 53.576 7.06658V7.20863C54.0921 7.23704 54.5869 7.39566 55.0604 7.68448C55.5386 7.96857 55.9293 8.37103 56.2323 8.89187C56.5353 9.4127 56.6868 10.0424 56.6868 10.7811C56.6868 11.5339 56.5045 12.211 56.14 12.8123C55.7754 13.4089 55.2261 13.88 54.4922 14.2257C53.7583 14.5713 52.835 14.7441 51.7223 14.7441H45.8346ZM48.4695 12.5424H51.3033C52.2598 12.5424 52.9487 12.3601 53.3701 11.9956C53.7962 11.6262 54.0093 11.1528 54.0093 10.5751C54.0093 10.1442 53.9027 9.75598 53.6897 9.41033C53.4766 9.05996 53.1736 8.78533 52.7806 8.58647C52.3876 8.38287 51.9188 8.28107 51.3743 8.28107H48.4695V12.5424ZM48.4695 6.38477H51.076C51.5306 6.38477 51.9401 6.30191 52.3047 6.13619C52.6693 5.96573 52.9558 5.72662 53.1641 5.41886C53.3772 5.10636 53.4837 4.73704 53.4837 4.3109C53.4837 3.74745 53.2848 3.28344 52.8871 2.91886C52.4941 2.55427 51.9094 2.37198 51.1329 2.37198H48.4695V6.38477ZM58.9791 14.7441V0.198686H61.614V12.5353H68.0203V14.7441H58.9791ZM82.738 7.47141C82.738 9.03865 82.4444 10.381 81.8573 11.4984C81.2749 12.6111 80.4794 13.4634 79.4709 14.0552C78.4671 14.6471 77.3284 14.943 76.0547 14.943C74.7811 14.943 73.64 14.6471 72.6314 14.0552C71.6276 13.4586 70.8322 12.604 70.2451 11.4913C69.6627 10.3739 69.3715 9.03391 69.3715 7.47141C69.3715 5.90418 69.6627 4.56422 70.2451 3.45153C70.8322 2.3341 71.6276 1.47946 72.6314 0.887606C73.64 0.29575 74.7811 -0.000178099 76.0547 -0.000178099C77.3284 -0.000178099 78.4671 0.29575 79.4709 0.887606C80.4794 1.47946 81.2749 2.3341 81.8573 3.45153C82.4444 4.56422 82.738 5.90418 82.738 7.47141ZM80.0888 7.47141C80.0888 6.36819 79.916 5.4378 79.5704 4.68022C79.2294 3.91791 78.756 3.34263 78.1499 2.95437C77.5438 2.56138 76.8455 2.36488 76.0547 2.36488C75.264 2.36488 74.5656 2.56138 73.9596 2.95437C73.3535 3.34263 72.8776 3.91791 72.532 4.68022C72.1911 5.4378 72.0206 6.36819 72.0206 7.47141C72.0206 8.57463 72.1911 9.5074 72.532 10.2697C72.8776 11.0273 73.3535 11.6026 73.9596 11.9956C74.5656 12.3838 75.264 12.5779 76.0547 12.5779C76.8455 12.5779 77.5438 12.3838 78.1499 11.9956C78.756 11.6026 79.2294 11.0273 79.5704 10.2697C79.916 9.5074 80.0888 8.57463 80.0888 7.47141ZM94.9734 4.84357C94.855 4.46005 94.6917 4.11677 94.4834 3.81374C94.2798 3.50598 94.0335 3.24319 93.7447 3.02539C93.4606 2.80759 93.1339 2.64423 92.7646 2.53533C92.3953 2.4217 91.9928 2.36488 91.5572 2.36488C90.776 2.36488 90.0799 2.56138 89.4691 2.95437C88.8584 3.34736 88.3778 3.92501 88.0274 4.68732C87.6817 5.4449 87.5089 6.36819 87.5089 7.45721C87.5089 8.55569 87.6817 9.48609 88.0274 10.2484C88.373 11.0107 88.8536 11.5907 89.4691 11.9885C90.0847 12.3815 90.7996 12.5779 91.614 12.5779C92.3527 12.5779 92.9919 12.4359 93.5316 12.1518C94.0762 11.8677 94.4952 11.4653 94.7888 10.9444C95.0823 10.4189 95.2291 9.80333 95.2291 9.09783L95.8257 9.19016H91.8768V7.1305H97.7788V8.87766C97.7788 10.1229 97.5137 11.2001 96.9834 12.1092C96.4531 13.0183 95.7239 13.719 94.7959 14.2115C93.8678 14.6992 92.8025 14.943 91.5998 14.943C90.2599 14.943 89.0833 14.6423 88.07 14.041C87.0615 13.435 86.2731 12.5756 85.7049 11.4629C85.1415 10.3455 84.8598 9.01971 84.8598 7.48562C84.8598 6.31138 85.0255 5.26261 85.3569 4.33931C85.6931 3.41602 86.1619 2.6324 86.7632 1.98846C87.3645 1.33978 88.07 0.84736 88.8797 0.511186C89.6893 0.170276 90.57 -0.000178099 91.5217 -0.000178099C92.3266 -0.000178099 93.0771 0.118193 93.7731 0.354936C94.4691 0.586943 95.087 0.918383 95.6268 1.34925C96.1713 1.78013 96.6188 2.29149 96.9691 2.88334C97.3195 3.4752 97.5492 4.12861 97.6581 4.84357H94.9734Z"
              fill="var(--color-text)"
            />
          </svg>
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
          <Link href="/blog" className={linkClass("/blog")} onClick={closeMenu}>
            Blog
          </Link>
          <Link
            href="/projects"
            className={linkClass("/projects")}
            onClick={closeMenu}
          >
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
