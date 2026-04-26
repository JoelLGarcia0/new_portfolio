import { experiences } from "./experience";
import { stack } from "./stack";

export const availableCommands = [
  { name: "experience", description: "View professional experience" },
  { name: "stack", description: "View technical stack" },
  { name: "contact", description: "Get in touch" },
  { name: "resume", description: "Download resume" },
  { name: "clear", description: "Clear terminal" },
];

export function getCommandOutput(command: string): string[] | "clear" | "resume" {
  const cmd = command.trim().toLowerCase();

  switch (cmd) {
    case "whoami":
      return [
        "Joel Garcia",
        "Backend API Engineer",
      ];

    case "describe":
      return [
        "I build reliable APIs, scalable backend systems, and production",
        "services using Python, Django, and PostgreSQL. I also build",
        "frontend applications with React, Next.js, and TypeScript.",
      ];

    case "help":
      return [
        "Available commands:",
        "",
        "  whoami       — Display identity",
        "  describe     — About me",
        "  experience   — View professional experience",
        "  stack        — View technical stack",
        "  contact      — Get in touch",
        "  resume       — Download resume",
        "  clear        — Clear terminal",
        "  help         — Show this message",
      ];

    case "experience":
      return experiences.flatMap((exp) => [
        `${exp.company} — ${exp.role} (${exp.period})`,
        ...exp.bullets.map((b) => `  → ${b}`),
        "",
      ]);

    case "stack": {
      const lines: string[] = [];
      lines.push("languages:  " + stack.languages.join(", "));
      lines.push("frameworks: " + stack.frameworks.join(", "));
      lines.push("databases:  " + stack.databases.join(", "));
      lines.push("tools:      " + stack.tools.join(", "));
      return lines;
    }

    case "contact":
      return [
        "email:    joelgarcia.dev@gmail.com",
        "github:   github.com/JoelLGarcia0",
        "linkedin: linkedin.com/in/joel-garcia",
      ];

    case "resume":
      return "resume";

    case "clear":
      return "clear";

    default:
      return [`command not found: ${cmd}`, "Type 'help' for available commands."];
  }
}
