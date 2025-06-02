import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  outcome: string;
  linkLabel: string;
  linkHref: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  role,
  outcome,
  linkLabel,
  linkHref,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-1">
        {title} (
        <a
          href={linkHref}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkLabel}
        </a>
        )
      </h3>
      <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
        {description}
      </p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800 dark:text-gray-400">
        <li>
          <strong>Technologies:</strong> {techStack.join(", ")}
        </li>
        <li>
          <strong>Role:</strong> {role}
        </li>
        <li>
          <strong>Outcome:</strong> {outcome}
        </li>
      </ul>
    </div>
  );
}
