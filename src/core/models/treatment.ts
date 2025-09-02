import type { TreatmentType } from "../types/treatment-type.ts";
import type { Frequency } from "../types/frequency-type.ts";
import type { VetContact } from "./vet-contact.ts";
import type { StatusType } from "../types/status-type.ts";
import type { GroomerContact } from "./groomer-contact.ts";

export interface Treatment {
  id: string;
  petId: string;
  type: TreatmentType;
  name?: string;
  dosage?: string;
  frequency?: Frequency;
  startDate?: string;
  endDate?: string;
  performedBy?: string | VetContact | GroomerContact;
  nextDueDate?: string;
  attachments?: string[];
  cost?: number;
  currency?: string;
  status?: StatusType;
  note?: string;
}
