export function SectionMark({ children }: { children: string }) {
  return (
    <span className="section-mark" aria-hidden="true">
      {children}
    </span>
  );
}
