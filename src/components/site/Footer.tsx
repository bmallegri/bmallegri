import { CopyEmail } from "./CopyEmail";
import { LocalTime } from "./LocalTime";
import seal from "@/assets/seal.webp";

export function Footer() {
  return (
    <footer className="bg-base">
      <div className="mx-auto flex max-w-[1080px] flex-col items-start gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="t-mono text-ink">Bella Michele Allegri</p>
          <p className="mt-2 t-mono text-ink/70">New Jersey</p>
          <div className="mt-2">
            <LocalTime />
          </div>
          <p className="mt-6">
            <a href="mailto:bellamallegri@gmail.com" className="link-accent t-giant-mail">
              bellamallegri@gmail.com
            </a>
          </p>
          <div className="mt-6">
            <CopyEmail />
          </div>
          {/* LinkedIn link slot: <a href="LINKEDIN_URL">LinkedIn</a> */}
          {/* GitHub link slot: <a href="GITHUB_URL">GitHub</a> */}
        </div>
        <img
          src={seal}
          alt="BMAllegri seal logo"
          loading="lazy"
          decoding="async"
          className="h-20 w-20 shrink-0 object-contain"
        />
      </div>
    </footer>
  );
}
