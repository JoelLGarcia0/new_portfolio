"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDark);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-800 dark:text-white" />
      )}
    </button>
  );
}
