import type { Pet } from "../../core/models/pet.ts";
import type { VetContact } from "../../core/models/vet-contact.ts";
import type { GroomerContact } from "../../core/models/groomer-contact.ts";
import type { Document } from "../../core/models/document.ts";
import type { Event } from "../../core/models/event.ts";
import type { Reminder } from "../../core/models/reminder.ts";
import type { OtherContact } from "../../core/models/other-contact.ts";

export type WithPetRef<T> = T & { petId: string; petName: string };

export const flattenVets = (pets: Pet[]): WithPetRef<VetContact>[] =>
  pets.flatMap((p) =>
    (p.vets ?? []).map((v) => ({ ...v, petId: p.id, petName: p.name })),
  );

export const flattenGroomers = (pets: Pet[]): WithPetRef<GroomerContact>[] =>
  pets.flatMap((p) =>
    (p.groomers ?? []).map((g) => ({ ...g, petId: p.id, petName: p.name })),
  );

export const flattenOtherContacts = (pets: Pet[]): WithPetRef<OtherContact>[] =>
  pets.flatMap((p) =>
    (p.otherContacts ?? []).map((o) => ({
      ...o,
      petId: p.id,
      petName: p.name,
    })),
  );

export const flattenDocuments = (pets: Pet[]): WithPetRef<Document>[] =>
  pets.flatMap((p) =>
    (p.documents ?? []).map((d) => ({ ...d, petId: p.id, petName: p.name })),
  );

export const flattenEvents = (pets: Pet[]): WithPetRef<Event>[] =>
  pets.flatMap((p) =>
    (p.events ?? []).map((e) => ({ ...e, petId: p.id, petName: p.name })),
  );

export const flattenReminders = (pets: Pet[]): WithPetRef<Reminder>[] =>
  pets.flatMap((p) =>
    (p.reminders ?? []).map((r) => ({ ...r, petId: p.id, petName: p.name })),
  );

export const selectEmergencyVets = (pets: Pet[]) =>
  flattenVets(pets)
    .filter((v) => v.emergency)
    .sort(
      (a, b) =>
        Number(b.emergency) - Number(a.emergency) ||
        a.name.localeCompare(b.name),
    );
