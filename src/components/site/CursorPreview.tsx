import { useEffect, useRef, useState } from "react";

export function useCursorPreview() {
  const [active, setActive] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const shown = useRef({ x: 0, y: 0 });
  const el = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", onMove);

    const loop = () => {
      shown.current.x += (pos.current.x - shown.current.x) * 0.12;
      shown.current.y += (pos.current.y - shown.current.y) * 0.12;
      if (el.current) {
        el.current.style.transform = `translate3d(${shown.current.x + 24}px, ${
          shown.current.y - 90
        }px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  return { active, setActive: enabled ? setActive : () => undefined, enabled, el };
}

export function CursorPreviewLayer({
  previewRef,
  visible,
  label,
  src,
}: {
  previewRef: React.MutableRefObject<HTMLDivElement | null>;
  visible: boolean;
  label: string;
  src?: string | undefined;
}) {
  return (
    <div
      ref={previewRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease-out" }}
    >
      {src ? (
        <div className="w-[180px] overflow-hidden border border-accent-tint bg-base">
          <img
            src={src}
            alt={label}
            className="block w-full"
            style={{ aspectRatio: "3 / 2", objectFit: "cover" }}
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-[280px] media-placeholder">
          <span className="sr-only">{label}</span>
        </div>
      )}
    </div>
  );
}
