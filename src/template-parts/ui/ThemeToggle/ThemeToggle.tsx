"use client";

import { useEffect, useState } from "react";
import './ThemeToggle.scss'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
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
      <span className="theme-switch__icon theme-switch__icon--sun">☀</span>
      <span className="theme-switch__icon theme-switch__icon--moon">🌙</span>
      <span className="theme-switch__thumb" />
    </button>
  );
}
