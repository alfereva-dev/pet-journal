import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = { open: boolean; onClose: () => void };

export default function MobileSidebar({ open, onClose }: Readonly<Props>) {
  const { t } = useTranslation(undefined, { keyPrefix: "NAVIGATION" });
  return (
    <div id={"mobile-sidebar"}>
      <dialog
        className={"drawer" + (open ? "drawer--open" : "")}
        aria-modal={"true"}
      >
        <div className={"drawer__header"}>
          <button aria-label={"Close menu"} onClick={onClose}>
            X
          </button>
        </div>
        <nav className="menu">
          <Nav to="/pets">{t("pets").toUpperCase()}</Nav>
          <Nav to="/contacts">{t("contacts").toUpperCase()}</Nav>
          <Nav to="/documents">{t("documents").toUpperCase()}</Nav>
          <Nav to="/habitats">{t("habitats").toUpperCase()}</Nav>
          <Nav to="/events">{t("events").toUpperCase()}</Nav>
          <Nav to="/reminders">{t("reminders").toUpperCase()}</Nav>
        </nav>
      </dialog>
      {open && (
        <div className="backdrop" onClick={onClose} aria-hidden="true" />
      )}
    </div>
  );
}

function Nav({
  to,
  children,
}: Readonly<{ to: string; children: React.ReactNode }>) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "menu__item" + (isActive ? " menu__item--active" : "")
      }
    >
      {children}
    </NavLink>
  );
}
