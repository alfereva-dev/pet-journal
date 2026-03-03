import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout.tsx";
import { PetsPage } from "../components/pages/PetsPage.tsx";
import { PetDetails } from "../components/ui/PetDetails.tsx";
import { ContactsPage } from "../components/pages/ContactsPage.tsx";
import { DocumentsPage } from "../components/pages/DocumentsPage.tsx";
import { HabitatsPage } from "../components/pages/HabitatsPage.tsx";
import { EventsPage } from "../components/pages/EventsPage.tsx";
import { RemindersPage } from "../components/pages/RemindersPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <PetsPage /> },
      { path: "pets", element: <PetsPage /> },
      { path: "pet-detail/:id", element: <PetDetails /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "habitats", element: <HabitatsPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "reminders", element: <RemindersPage /> },
    ],
  },
]);
