import type { PhysicalCharacteristicType } from "../types/physical-characteristic-type.ts";
import { LengthUnit, type MassUnit, TempUnit } from "../types/unit.ts";

export interface PhysicalCharacteristic {
  id: string;
  petId: string;
  type: PhysicalCharacteristicType;
  value: number;
  unit: MassUnit | LengthUnit | TempUnit;
  date: string;
  note?: string;
}
