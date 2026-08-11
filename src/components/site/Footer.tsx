export function Footer() {
  return (
    <footer className="border-t border-accent-tint/60 bg-base">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-2xl text-ink">Bella Michele Allegri</p>
          <p className="mt-3 font-mono text-xs tracking-widest text-ink/70">New Jersey</p>
          <p className="mt-2 font-mono text-xs">
            <a
              href="mailto:bmallegri@gmail.com"
              className="text-accent underline underline-offset-4"
            >
              bmallegri@gmail.com
            </a>
          </p>
          {/* LinkedIn link slot: <a href="LINKEDIN_URL">LinkedIn</a> */}
          {/* GitHub link slot: <a href="GITHUB_URL">GitHub</a> */}
        </div>
        <div
          className="h-20 w-20 shrink-0 rounded-full border border-accent-tint bg-neutral-400/30"
          role="img"
          aria-label="Placeholder for the circular seal logo"
        />
      </div>
    </footer>
  );
}