import type { MeasurementType } from "../types/measurement-type.ts";

export interface Measurement {
  id: string;
  petId: string;
  type: MeasurementType;
  value: number;
  unit?: string;
  date: string;
  note?: string;
}
