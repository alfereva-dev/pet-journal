import { DesktopSidebar } from "./DesktopSidebar.tsx";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery.ts";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar.tsx";

export default function RootLayout() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  return (
    <div id={"root-layout"} className={"root-box"}>
      {isDesktop ? (
        <DesktopSidebar />
      ) : (
        <MobileSidebar open={open} onClose={() => setOpen(false)} />
      )}
      <section>
        {!isDesktop && (
          <button aria-label="Open menu" onClick={() => setOpen(true)}>
            ☰
          </button>
        )}
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
