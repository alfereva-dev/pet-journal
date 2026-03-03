import type { Pet } from "./pet.ts";

export interface User {
  id: string;
  name: string;
  login: string;
  pets: Pet[];
}
