import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function DesktopSidebar() {
  const { t } = useTranslation(undefined, { keyPrefix: "NAVIGATION" });
  return (
    <aside id={"desktop-sidebar"} className="sidebar sidebar--desktop">
      <nav className="menu">
        <Nav to="/pets">{t("pets").toUpperCase()}</Nav>
        <Nav to="/contacts">{t("contacts").toUpperCase()}</Nav>
        <Nav to="/documents">{t("documents").toUpperCase()}</Nav>
        <Nav to="/habitats">{t("habitats").toUpperCase()}</Nav>
        <Nav to="/events">{t("events").toUpperCase()}</Nav>
        <Nav to="/reminders">{t("reminders").toUpperCase()}</Nav>
      </nav>
    </aside>
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
