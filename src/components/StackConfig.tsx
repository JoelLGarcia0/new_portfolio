import { stack } from "@/data/stack";

export default function StackConfig() {
  return (
    <section id="stack" className="space-y-4">
      <h2 className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
        stack.config
      </h2>
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-md p-5 bg-zinc-50/50 dark:bg-zinc-900/30">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category} className="mb-3 last:mb-0">
            <span className="text-zinc-400 dark:text-zinc-500 text-sm">{category}:</span>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 rounded text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
