import seal from "@/assets/seal.webp";

export function Seal({ className }: { className?: string }) {
  return (
    <img
      src={seal}
      alt="BMAllegri seal logo"
      decoding="async"
      className={`seal-spin object-contain ${className ?? ""}`}
    />
  );
}
