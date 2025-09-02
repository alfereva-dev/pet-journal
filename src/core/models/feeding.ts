import type { FeedingType } from "../types/feeding-type.ts";
import type { Frequency } from "../types/frequency-type.ts";
import { type CountUnit, MassUnit } from "../types/unit.ts";

export interface Feeding {
  id: string;
  petId: string;
  type: FeedingType;
  foodName?: string;
  brand?: string;
  amount?: number;
  unit?: CountUnit | MassUnit;
  frequency?: Frequency;
  time?: string;
  note?: string;
}
