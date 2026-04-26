import { systemProfile } from "@/data/profile";

export default function SystemProfile() {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-md p-4 bg-zinc-50 dark:bg-zinc-900/50">
      <h3 className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
        System Profile
      </h3>
      <ul className="space-y-1.5 text-sm">
        {systemProfile.map((entry) => (
          <li key={entry.key} className="flex">
            <span className="text-zinc-400 dark:text-zinc-500 w-24 shrink-0">{entry.key}:</span>
            <span
              className={
                entry.key === "status"
                  ? "text-green-600 dark:text-green-400"
                  : "text-zinc-700 dark:text-zinc-300"
              }
            >
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
