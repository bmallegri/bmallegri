import type { ReactNode } from "react";

export function RegTicks() {
  return (
    <span aria-hidden="true" className="reg-ticks" />
  );
}

export function Photo({
  src,
  alt,
  ratio,
  caption,
  className,
  priority,
}: {
  src?: string;
  alt: string;
  ratio: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className="photo-frame media-placeholder" style={{ aspectRatio: ratio }}>
        {src && (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="photo-img"
          />
        )}
        <span aria-hidden="true" className="film-grain" />
        <RegTicks />
      </div>
      {caption && <figcaption className="photo-meta">{caption}</figcaption>}
    </figure>
  );
}

export function FullBleedPhoto({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="photo-frame media-placeholder w-full" style={{ aspectRatio: "21 / 9" }}>
      {src && alt && (
        <img src={src} alt={alt} loading="lazy" decoding="async" className="photo-img" />
      )}
      <span aria-hidden="true" className="film-grain" />
      <RegTicks />
      <span className="vf-corners" aria-hidden="true">
        <span className="vf-corner vf-corner--tl" />
        <span className="vf-corner vf-corner--tr" />
        <span className="vf-corner vf-corner--bl" />
        <span className="vf-corner vf-corner--br" />
      </span>
    </div>
  );
}

export function PhotoSlot({ ratio, caption, children }: { ratio: string; caption?: string; children?: ReactNode }) {
  return (
    <figure>
      <div className="photo-frame media-placeholder" style={{ aspectRatio: ratio }}>
        {children}
        <span aria-hidden="true" className="film-grain" />
        <RegTicks />
      </div>
      {caption && <figcaption className="photo-meta">{caption}</figcaption>}
    </figure>
  );
}
