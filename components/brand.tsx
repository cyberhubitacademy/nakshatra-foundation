export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#home"
      aria-label="Nakshatra Foundation home"
    >
      <span className="brand-symbol" aria-hidden="true">
        ✦
      </span>
      <span>
        NAKSHATRA<small>F O U N D A T I O N</small>
      </span>
    </a>
  );
}
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
