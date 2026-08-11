import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"dot" | "ring" | "cross">("dot");

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");
    const onMove = (e: PointerEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("input, textarea, select")) setMode("dot");
      else if (t.closest("img, .photo-frame, video")) setMode("cross");
      else if (t.closest("a, button, [role='button']")) setMode("ring");
      else setMode("dot");
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={dot} aria-hidden="true" className="cursor-dot" data-mode={mode} />;
}
