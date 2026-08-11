import { CopyEmail } from "./CopyEmail";
import { LocalTime } from "./LocalTime";
import { Seal } from "./Seal";

export function Footer() {
  return (
    <footer className="bg-base">
      <div className="mx-auto max-w-[1080px] px-6 py-16">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
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
        <Seal className="h-20 w-20 shrink-0" />
        </div>
        <div className="footer-marks mt-12" aria-hidden="true">
          <span>BMALLEGRI</span>
          <span className="hidden sm:inline">54.60 N / 5.93 W</span>
          <span>END OF TRANSMISSION</span>
        </div>
      </div>
    </footer>
  );
}
