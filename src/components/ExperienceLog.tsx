import { experiences } from "@/data/experience";

export default function ExperienceLog() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
        experience.log
      </h2>
      {experiences.map((exp) => (
        <div key={exp.company} className="border border-zinc-200 dark:border-zinc-800 rounded-md p-5 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
            <h3 className="text-green-600 dark:text-green-400 text-sm font-medium">
              {exp.company} <span className="text-zinc-400 dark:text-zinc-500">— {exp.role}</span>
            </h3>
            <span className="text-xs text-zinc-400 dark:text-zinc-600">{exp.period}</span>
          </div>
          <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600 shrink-0">→</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
