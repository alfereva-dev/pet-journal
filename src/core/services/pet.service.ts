import type { Pet } from "../models/pet.ts";
import { UserService } from "./user.service.ts";
import { AppError } from "./errors.ts";
import type { User } from "../models/user.ts";

let nextPetId = 1000;

async function withUser<T>(userId: string, cb: (user: User) => T): Promise<T> {
  const user = await UserService.getUser(userId);
  return cb(user);
}

export async function getPets(userId: string): Promise<Pet[]> {
  return withUser(userId, (user) => user.pets ?? []);
}

export async function getPet(userId: string, petId: string): Promise<Pet> {
  const pets = await getPets(userId);
  const pet = pets.find((p) => p.id === petId);
  if (!pet) {
    throw new AppError(`Pet ${petId} not found`, "NOT_FOUND");
  }
  return pet;
}

export async function addPet(
  newPet: Omit<Pet, "id" | "userId">,
  userId: string,
): Promise<Pet> {
  return withUser(userId, (user) => {
    const pet: Pet = { ...newPet, id: String(nextPetId++), userId };
    user.pets.push(pet);
    return pet;
  });
}

export async function updatePet(
  userId: string,
  petId: string,
  updates: Partial<Pet>,
): Promise<Pet> {
  return withUser(userId, (user) => {
    const index = user.pets.findIndex((pet) => pet.id === petId);
    if (index !== -1) {
      throw new AppError(`Pet ${petId} not found`, "NOT_FOUND");
    }
    user.pets[index] = { ...user.pets[index], ...updates };
    return user.pets[index];
  });
}

export async function removePet(userId: string, id: string): Promise<void> {
  return withUser(userId, (user) => {
    const index = user.pets.findIndex((pet) => pet.id === id);
    if (index === -1) {
      throw new AppError(`Pet ${userId} not found`, "NOT_FOUND");
    }
    user.pets.splice(index, 1);
  });
}
