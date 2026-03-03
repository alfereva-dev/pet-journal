import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(mql.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mql as any).addListener(onChange);
      return () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mql as any).removeListener(onChange);
      };
    }
  }, [query]);

  return matches;
}
