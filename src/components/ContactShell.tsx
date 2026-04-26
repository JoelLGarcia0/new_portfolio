export default function ContactShell() {
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
        contact.sh
      </h2>
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-md p-5 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2 text-sm">
        <div className="flex gap-2">
          <span className="text-zinc-400 dark:text-zinc-500 w-20 shrink-0">email:</span>
          <a
            href="mailto:joelgarcia.dev@gmail.com"
            className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
          >
            joelgarcia.dev@gmail.com
          </a>
        </div>
        <div className="flex gap-2">
          <span className="text-zinc-400 dark:text-zinc-500 w-20 shrink-0">github:</span>
          <a
            href="https://github.com/JoelLGarcia0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
          >
            github.com/JoelLGarcia0
          </a>
        </div>
        <div className="flex gap-2">
          <span className="text-zinc-400 dark:text-zinc-500 w-20 shrink-0">linkedin:</span>
          <a
            href="https://linkedin.com/in/joel-garcia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
          >
            linkedin.com/in/joel-garcia
          </a>
        </div>
      </div>
    </section>
  );
}
