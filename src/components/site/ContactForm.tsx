import { useState, type FormEvent } from "react";

const PURPOSES = ["Hiring info", "Full portfolio", "Artistic Builders Guild", "Other"];
const SOURCES = [
  "Friend",
  "LinkedIn",
  "Networking event or college event",
  "Artistic Builders Guild",
  "Other",
];

const fieldClass =
  "w-full border border-accent-tint bg-transparent px-3 py-2 font-mono text-sm text-current outline-none focus:border-accent";
const labelClass = "block font-mono text-[0.7rem] uppercase tracking-widest";

export function ContactForm({ extended = false, idPrefix }: { extended?: boolean; idPrefix: string }) {
  const [purpose, setPurpose] = useState("");
  const [failed, setFailed] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `First name: ${data.get("first")}`,
      `Last name: ${data.get("last")}`,
      `Email: ${data.get("email")}`,
    ];
    if (extended) {
      lines.push(`Purpose: ${purpose}`, `How did you hear about me: ${data.get("source")}`);
    }
    lines.push("", String(data.get("message") ?? ""));
    const href = `mailto:bmallegri@gmail.com?subject=${encodeURIComponent(
      "Message from the website",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    try {
      const w = window.open(href, "_self");
      if (!w) setFailed(true);
    } catch {
      setFailed(true);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-first`}>
            First name
          </label>
          <input id={`${idPrefix}-first`} name="first" required className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-last`}>
            Last name
          </label>
          <input id={`${idPrefix}-last`} name="last" required className={`mt-2 ${fieldClass}`} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${idPrefix}-email`}>
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      {extended && (
        <>
          <fieldset>
            <legend className={labelClass}>Purpose</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {PURPOSES.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPurpose(p)}
                  aria-pressed={purpose === p}
                  className={`rounded-full border border-accent-tint px-4 py-1.5 font-mono text-xs transition-colors ${
                    purpose === p ? "border-accent text-accent" : "hover:border-accent"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <input
              tabIndex={-1}
              aria-hidden="true"
              required
              value={purpose}
              onChange={() => undefined}
              className="h-0 w-0 border-0 p-0 opacity-0"
            />
          </fieldset>
          <div>
            <label className={labelClass} htmlFor={`${idPrefix}-source`}>
              How did you hear about me?
            </label>
            <select
              id={`${idPrefix}-source`}
              name="source"
              required
              defaultValue=""
              className={`mt-2 ${fieldClass}`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {SOURCES.map((s) => (
                <option key={s} value={s} className="text-black">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div>
        <label className={labelClass} htmlFor={`${idPrefix}-message`}>
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <button
        type="submit"
        className="border border-accent-tint px-6 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
      >
        {extended ? "Submit" : "Send"}
      </button>

      {failed && (
        <p className="font-mono text-xs">
          Your mail app did not open. Write directly to{" "}
          <a href="mailto:bmallegri@gmail.com" className="text-accent underline underline-offset-4">
            bmallegri@gmail.com
          </a>
        </p>
      )}
    </form>
  );
}