import { useEffect, useState } from "react";

// Switch this single constant to Boston in January.
export const CURRENT_LOCATION = { city: "Belfast", timeZone: "Europe/London" };

function format(tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(new Date());
}

export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format(CURRENT_LOCATION.timeZone));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <p className="t-mono text-ink/70" suppressHydrationWarning>
      Currently: {CURRENT_LOCATION.city}, where it's {time}
    </p>
  );
}
