"use client";

import { useState, useCallback } from "react";
import { TerminalLine } from "@/types/terminal";
import { getCommandOutput } from "@/data/commands";
import TerminalNav from "./TerminalNav";
import CommandPanel from "./CommandPanel";
import SystemProfile from "./SystemProfile";
import ExperienceLog from "./ExperienceLog";
import StackConfig from "./StackConfig";
import ContactShell from "./ContactShell";
import TerminalPrompt from "./TerminalPrompt";

export default function TerminalPage() {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [lineId, setLineId] = useState(0);

  const runCommand = useCallback(
    (cmd: string) => {
      const result = getCommandOutput(cmd);

      if (result === "clear") {
        setHistory([]);
        return;
      }

      if (result === "resume") {
        window.open("/JoelGarciaResume2026.pdf", "_blank");
        setHistory((prev) => [
          ...prev,
          { id: lineId, command: cmd, output: ["Opening resume..."] },
        ]);
        setLineId((id) => id + 1);
        return;
      }

      setHistory((prev) => [
        ...prev,
        { id: lineId, command: cmd, output: result },
      ]);
      setLineId((id) => id + 1);
    },
    [lineId]
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 flex flex-col">
      <TerminalNav />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 space-y-16">
        {/* Hero + sidebar */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hero terminal output + interactive terminal */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-1">
              <div className="flex gap-2 text-sm">
                <span className="text-green-600 dark:text-green-400">joel@backend:~$</span>
                <span className="text-zinc-800 dark:text-zinc-300">whoami</span>
              </div>
              <div className="pl-0 mt-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                  Joel Garcia
                </h1>
                <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                  Backend API Engineer
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex gap-2 text-sm">
                <span className="text-green-600 dark:text-green-400">joel@backend:~$</span>
                <span className="text-zinc-800 dark:text-zinc-300">describe</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed max-w-xl">
                I build reliable APIs, scalable backend systems, and production
                services using Python, Django, and PostgreSQL. I also build
                frontend applications with React, Next.js, and TypeScript.
              </p>
            </div>

            {/* Interactive Terminal — right in the hero */}
            <TerminalPrompt onCommand={runCommand} history={history} />
          </div>

          {/* Right panel */}
          <div className="space-y-6">
            <CommandPanel onCommand={runCommand} />
            <SystemProfile />
          </div>
        </section>

        {/* Experience */}
        <ExperienceLog />

        {/* Stack */}
        <StackConfig />

        {/* Contact */}
        <ContactShell />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-xs text-zinc-400 dark:text-zinc-600">
        Built with Next.js, React and probably too much caffeine. {"</>"}
      </footer>
    </div>
  );
}
