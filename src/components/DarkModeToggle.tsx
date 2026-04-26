"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    setIsDark(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xs px-2.5 py-1 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-500 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-400 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}
