import type { EnvironmentType } from "../types/environment-type.ts";

export interface Habitat {
  id: string;
  petId: string;
  type: EnvironmentType;
  name?: string;
  size?: string;
  lighting?: string;
  heating?: string;
  substrate?: string;
  targetTemp?: number;
  targetHumidity?: number;
  notes?: string;
}
