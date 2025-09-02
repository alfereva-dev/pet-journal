import type { GroomerContactType } from "../types/groomer-contact-type.ts";
import type { GroomingType } from "../types/grooming-type.ts";

export interface GroomerContact {
  id: string;
  contactType: GroomerContactType;
  groomingType: GroomingType;
  name?: string;
  telephone?: string;
  email?: string;
  website?: string;
  address?: string;
  note?: string;
  emergency?: boolean;
}
