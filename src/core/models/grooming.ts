import type { GroomingType } from "../types/grooming-type.ts";
import type { LocationType } from "../types/location-type.ts";
import type { StatusType } from "../types/status-type.ts";
import type { VetContact } from "./vet-contact.ts";
import type { GroomerContact } from "./groomer-contact.ts";

export interface Grooming {
  id: string;
  petId: string;
  type: GroomingType;
  date?: string;
  durationMinutes?: number;
  location?: LocationType;
  status?: StatusType;
  address?: string;
  performedBy?: string | VetContact | GroomerContact;
  telephone?: string;
  website?: string;
  services?: string[];
  productsUsed?: string[];
  attachments?: string[];
  cost?: number;
  currency?: string;
  rating?: number;
  nextDueDate?: string;
  note?: string;
}
