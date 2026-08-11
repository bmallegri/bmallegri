const TICKER_TEXT =
  "COGNITION · SPACED RETRIEVAL · TELEMETRY · HUMAN-AI SYSTEMS · OMICS · WIRING HARNESS · AERIAL PHOTOGRAPHY · SAN DIEGO / PROVIDENCE / BOSTON";

export function Ticker() {
  return (
    <div className="ticker bg-base" aria-label={TICKER_TEXT}>
      <div className="ticker-track" aria-hidden="true">
        <span className="ticker-item">{TICKER_TEXT}</span>
        <span className="ticker-item">{TICKER_TEXT}</span>
      </div>
    </div>
  );
}
