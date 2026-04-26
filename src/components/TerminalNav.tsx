"use client";

import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { label: "about.system", href: "#hero" },
  { label: "experience.log", href: "#experience" },
  { label: "stack.config", href: "#stack" },
  { label: "contact.sh", href: "#contact" },
];

export default function TerminalNav() {
  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <a href="#hero" className="text-green-600 dark:text-green-400 font-bold text-sm tracking-wide">
          joel@backend:~_
        </a>
        <div className="flex items-center gap-x-5 gap-y-1">
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-zinc-500">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
