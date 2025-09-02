import type { InsuranceType } from "../types/insurance-type.ts";

export interface Insurance {
  id: string;
  policyNumber: string;
  provider: string;
  validFrom: string;
  validTo: string;
  telephone?: string;
  email?: string;
  website?: string;
  note?: string;
  coverageType: InsuranceType;
}
