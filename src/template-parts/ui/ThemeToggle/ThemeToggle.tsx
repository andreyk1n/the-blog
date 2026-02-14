// "use client";

// import { useEffect, useState } from "react";
// import "./ThemeToggle.scss";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <button
//       className={`theme-switch theme-switch--${theme}`}
//       onClick={toggleTheme}
//       aria-label="Toggle theme"
//     >
//       <span className="theme-switch__icon theme-switch__icon--sun">

//       </span>
//       <span className="theme-switch__icon theme-switch__icon--moon">

//       </span>
//       <span className="theme-switch__thumb" />
//     </button>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import "./ThemeToggle.scss";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialTheme = systemDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      className={`theme-switch theme-switch--${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="theme-switch__icon theme-switch__icon--sun">
        {" "}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z"
            fill="white"
          />
          <path
            d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="theme-switch__icon theme-switch__icon--moon">
        {" "}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.26221 1.96191C8.81486 1.73204 9.19042 1.72364 9.43018 1.77148C9.66952 1.81935 9.81736 1.93212 9.8999 2.01758L9.90674 2.02344C9.99147 2.10819 10.0993 2.25508 10.144 2.48438C10.1886 2.7128 10.1791 3.06933 9.95166 3.58984V3.59082C9.46419 4.71412 9.21977 5.91267 9.22998 7.1416V7.14258C9.25133 11.8454 13.1476 15.8168 17.897 16.0088V16.0098C18.5876 16.0416 19.265 15.9878 19.9175 15.8721H19.9194C20.5024 15.7661 20.8652 15.8388 21.0845 15.9355C21.3033 16.0321 21.4222 16.171 21.4849 16.2725C21.5496 16.3773 21.6228 16.5481 21.6138 16.7881C21.6046 17.0282 21.5104 17.3861 21.1577 17.8623L21.1567 17.8652C19.1323 20.6345 15.9124 22.25 12.4595 22.25C12.2872 22.25 12.1318 22.2502 11.979 22.2412L11.9722 22.2402C6.78766 22.0087 2.43096 17.9519 1.82568 12.9336L1.77881 12.4443C1.45446 7.94166 4.05813 3.73034 8.26221 1.96191ZM9.17041 2.25C9.0007 2.25 8.77408 2.28889 8.46631 2.41895C4.46112 4.10092 1.97623 8.11882 2.271 12.4043V12.4053C2.62944 17.4235 6.89886 21.5163 11.9858 21.7383V21.7393C15.4436 21.9074 18.7235 20.3306 20.7427 17.5752L20.7437 17.5762L20.7466 17.5703C20.9189 17.3291 21.0111 17.141 21.0581 17.0156L21.2837 16.4141L20.645 16.3428C20.546 16.3318 20.4017 16.3233 20.2056 16.3457L20.0024 16.3779C19.309 16.5014 18.5846 16.5491 17.8696 16.5205C12.8532 16.3209 8.75025 12.107 8.72021 7.16016C8.72021 5.84876 8.97627 4.58966 9.49561 3.40723C9.62403 3.1247 9.65303 2.92021 9.6665 2.8125L9.73682 2.25H9.17041Z"
            stroke="#090D1F"
          />
        </svg>
      </span>
      <span className="theme-switch__thumb" />
    </button>
  );
}
