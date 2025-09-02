import type { EventType } from "../types/event-type.ts";
import type { LocationType } from "../types/location-type.ts";
import type { VetContact } from "./vet-contact.ts";
import type { StatusType } from "../types/status-type.ts";
import type { GroomerContact } from "./groomer-contact.ts";

export interface Event {
  id: string;
  petId: string;
  type: EventType;
  title?: string;
  description?: string;
  date: string;
  durationMinutes?: number;
  relatedEntity?: {
    entity: "Feeding" | "Treatment" | "Grooming" | "Reminder" | "Custom";
    id: number;
  };
  location?: LocationType;
  address?: string;
  performedBy?: string | VetContact | GroomerContact;
  attachments?: string[];
  status?: StatusType;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
}
