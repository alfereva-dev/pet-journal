import type { VetContactType } from "../types/vet-contact-type.ts";

export interface VetContact {
  id: string;
  type?: VetContactType;
  name: string;
  telephone?: string;
  email?: string;
  address?: string;
  website?: string;
  note?: string;
  emergency?: boolean;
}
