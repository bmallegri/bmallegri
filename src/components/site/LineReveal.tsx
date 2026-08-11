import type { ElementType, ReactNode } from "react";

export function LineReveal({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`line-mask ${lineClassName ?? ""}`}>
          <span className="line-inner" style={{ animationDelay: `${i * 80}ms` }}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
