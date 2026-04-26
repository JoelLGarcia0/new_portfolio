"use client";

import { availableCommands } from "@/data/commands";

interface CommandPanelProps {
  onCommand: (cmd: string) => void;
}

export default function CommandPanel({ onCommand }: CommandPanelProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-md p-4 bg-zinc-50 dark:bg-zinc-900/50">
      <h3 className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
        Available Commands
      </h3>
      <ul className="space-y-2 text-sm">
        {availableCommands.map((cmd) => (
          <li key={cmd.name}>
            <button
              onClick={() => onCommand(cmd.name)}
              className="text-left w-full group"
            >
              <span className="text-green-600 dark:text-green-400 group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors">
                {cmd.name}
              </span>
              <span className="text-zinc-400 dark:text-zinc-600 ml-2">— {cmd.description}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
