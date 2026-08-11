import { useState } from "react";

const EMAIL = "bellamallegri@gmail.com";

export function CopyEmail() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  return (
    <span className="inline-flex flex-wrap items-baseline gap-3">
      <button type="button" onClick={copy} className="btn-accent">
        Copy email
      </button>
      <span aria-live="polite" className="t-mono">
        {state === "copied" && "Copied"}
        {state === "failed" && `Copy failed. The address is ${EMAIL}`}
      </span>
    </span>
  );
}
