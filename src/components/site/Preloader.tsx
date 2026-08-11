import { useEffect, useState } from "react";
import { Seal } from "./Seal";

export function Preloader() {
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem("bma-preloaded") === "1";
    } catch {
      seen = true;
    }
    if (seen) return;
    try {
      sessionStorage.setItem("bma-preloaded", "1");
    } catch {
      /* ignore */
    }
    setShow(true);
    const t1 = window.setTimeout(() => setFading(true), 900);
    const t2 = window.setTimeout(() => setShow(false), 1200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!show) return null;
  return (
    <div className="preloader bg-base" data-fading={fading ? "yes" : "no"} aria-hidden="true">
      <Seal className="h-16 w-16" />
      <p className="mt-5 t-mono text-ink">BMAllegri</p>
    </div>
  );
}
