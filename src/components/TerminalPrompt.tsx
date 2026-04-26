"use client";

import { useState, useRef, useEffect } from "react";
import { TerminalLine } from "@/types/terminal";

interface TerminalPromptProps {
  onCommand: (cmd: string) => void;
  history: TerminalLine[];
}

const PROMPT = "joel@backend:~$";

export default function TerminalPrompt({ onCommand, history }: TerminalPromptProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollAreaRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [history]);

  // Keep input focused when clicking anywhere in the terminal
  function handleContainerClick() {
    inputRef.current?.focus();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    onCommand(input.trim());
    setInput("");
  }

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-md bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70 dark:bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70 dark:bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70 dark:bg-green-500/70" />
        <span className="text-xs text-zinc-400 dark:text-zinc-500 ml-2">terminal</span>
      </div>

      <div
        ref={scrollAreaRef}
        onClick={handleContainerClick}
        className="terminal-scroll p-4 min-h-48 max-h-96 overflow-y-auto text-sm cursor-text"
      >
        {/* Welcome message */}
        {history.length === 0 && (
          <div className="text-zinc-500 dark:text-zinc-600 mb-2">
            Type &apos;help&apos; for available commands.
          </div>
        )}

        {/* Command history + output — inline like a real terminal */}
        {history.map((line) => (
          <div key={line.id} className="mb-2">
            <div className="flex gap-2">
              <span className="text-green-600 dark:text-green-400 shrink-0">{PROMPT}</span>
              <span className="text-zinc-800 dark:text-zinc-300">{line.command}</span>
            </div>
            {line.output.map((out, i) => (
              <div key={i} className="text-zinc-600 dark:text-zinc-400">
                {out || "\u00A0"}
              </div>
            ))}
          </div>
        ))}

        {/* Active prompt — always at the bottom, inline with history */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <span className="text-green-600 dark:text-green-400 shrink-0">{PROMPT}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-zinc-800 dark:text-zinc-200 caret-green-500 dark:caret-green-400"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
