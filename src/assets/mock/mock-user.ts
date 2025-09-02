import type { User } from "../../core/models/user.ts";
import { PetGender } from "../../core/types/pet-gender.ts";
import { PetType } from "../../core/types/pet-type.ts";
import { FeedingType } from "../../core/types/feeding-type.ts";
import { LengthUnit, MassUnit } from "../../core/types/unit.ts";
import { Frequency } from "../../core/types/frequency-type.ts";
import { PetStatus } from "../../core/types/pet-status.ts";
import { PhysicalCharacteristicType } from "../../core/types/physical-characteristic-type.ts";
import { TreatmentType } from "../../core/types/treatment-type.ts";
import { StatusType } from "../../core/types/status-type.ts";
import { GroomingType } from "../../core/types/grooming-type.ts";
import { ReminderType } from "../../core/types/reminder-type.ts";
import { EventType } from "../../core/types/event-type.ts";
import { VetContactType } from "../../core/types/vet-contact-type.ts";
import { InsuranceType } from "../../core/types/insurance-type.ts";
import { GroomerContactType } from "../../core/types/groomer-contact-type.ts";

export const mockUser: User = {
  id: "user1",
  name: "Marie Lev",
  login: "marie.lev@seznam.cz",
  pets: [
    {
      id: "1",
      userId: "user1",
      name: "Rex",
      birthday: "2022-06-12",
      gender: PetGender.MALE,
      passport: "CZ-2025-458721",
      chip: "985141000768432",
      type: PetType.MAMMAL,
      physicalCharacteristics: [
        {
          id: "p1",
          petId: "1",
          type: PhysicalCharacteristicType.WEIGHT,
          value: 23,
          unit: MassUnit.KG,
          date: "2025-06-12",
        },
      ],
      species: "Dog",
      breed: "Corgi",
      status: PetStatus.ACTIVE,
      feedings: [
        {
          id: "f1",
          petId: "1",
          type: FeedingType.DRY_FOOD,
          foodName: "Royal Canin Adult",
          brand: "Royal Canin",
          amount: 150,
          unit: MassUnit.G,
          frequency: Frequency.TWICE_A_DAY,
        },
      ],
      treatments: [
        {
          id: "t1",
          petId: "1",
          type: TreatmentType.VACCINE,
          name: "Rabies",
          startDate: "2025-05-01",
          performedBy: "Dr. Novak",
          nextDueDate: "2026-05-01",
          status: StatusType.COMPLETED,
        },
      ],
      grooming: [
        {
          id: "g1",
          petId: "1",
          type: GroomingType.HAIR,
          date: "2025-06-15",
          services: ["Hair trim", "Nail cutting"],
          cost: 45,
          currency: "EUR",
          status: StatusType.COMPLETED,
        },
      ],
      events: [
        {
          id: "event1",
          petId: "1",
          type: EventType.VET_VISIT,
          title: "Annual check-up",
          date: "2025-06-01",
          status: StatusType.COMPLETED,
        },
      ],
      reminders: [
        {
          id: "rem1",
          petId: "1",
          type: ReminderType.VACCINATION,
          dueAt: "2026-05-01",
          title: "Rabies vaccination",
          frequency: Frequency.YEARLY,
          status: StatusType.PLANNED,
        },
      ],
      vets: [
        {
          id: "vet1",
          type: VetContactType.VET,
          name: "VetClinic",
          telephone: "+420XXXXXXXXX",
          email: "vet@gmail.com",
          emergency: true,
        },
      ],
      groomers: [
        {
          id: "g1",
          contactType: GroomerContactType.SALON,
          groomingType: GroomingType.FUR,
          name: "Salon",
          telephone: "+420XXXXXXXXX",
          email: "grooming.salon@mail.com",
          website: "www.salon.com",
          address: "Praha",
        },
      ],
      insurances: [
        {
          id: "in1",
          policyNumber: "in7081240612-CZ",
          provider: "SuperZoo",
          validFrom: "2025-06-02",
          validTo: "2025-06-02",
          email: "super-zoo@mail.com",
          website: "www.superZoo.com",
          coverageType: InsuranceType.BASIC,
        },
      ],
    },
    {
      id: "2",
      userId: "user1",
      name: "Kiwi",
      birthday: "2021-03-04",
      gender: PetGender.FEMALE,
      type: PetType.BIRD,
      physicalCharacteristics: [
        {
          id: "p2",
          petId: "2",
          type: PhysicalCharacteristicType.WEIGHT,
          value: 0.9,
          unit: MassUnit.KG,
          date: "2025-06-10",
        },
        {
          id: "p2b",
          petId: "2",
          type: PhysicalCharacteristicType.WINGSPAN,
          value: 28,
          unit: LengthUnit.CM,
          date: "2025-06-10",
        },
      ],
      species: "Parrot",
      breed: "Cockatiel",
      status: PetStatus.ACTIVE,
      feedings: [
        {
          id: "f2",
          petId: "2",
          type: FeedingType.SEEDS,
          foodName: "Millet mix",
          amount: 20,
          unit: MassUnit.G,
          frequency: Frequency.DAILY,
        },
      ],
      treatments: [
        {
          id: "t2",
          petId: "2",
          type: TreatmentType.VITAMINS,
          name: "Calcium supplement",
          frequency: Frequency.WEEKLY,
          status: StatusType.IN_PROGRESS,
        },
      ],
      grooming: [
        {
          id: "g2",
          petId: "2",
          type: GroomingType.FEATHERS,
          date: "2025-06-20",
          services: ["Feather care", "Beak check"],
          status: StatusType.COMPLETED,
        },
      ],
      events: [
        {
          id: "event2",
          petId: "2",
          type: EventType.BEHAVIOR,
          title: "Socialization training",
          date: "2025-06-05",
          status: StatusType.COMPLETED,
        },
      ],
      reminders: [
        {
          id: "rem2",
          petId: "2",
          type: ReminderType.CLEANING,
          title: "Cage cleaning",
          frequency: Frequency.WEEKLY,
          status: StatusType.PLANNED,
        },
      ],
    },
    {
      id: "3",
      userId: "user1",
      name: "Lumi",
      birthday: "2020-09-10",
      gender: PetGender.UNKNOWN,
      type: PetType.AMPHIBIAN,
      physicalCharacteristics: [
        {
          id: "p3",
          petId: "3",
          type: PhysicalCharacteristicType.WEIGHT,
          value: 0.25,
          unit: MassUnit.KG,
          date: "2025-06-08",
        },
        {
          id: "p3b",
          petId: "3",
          type: PhysicalCharacteristicType.LENGTH,
          value: 23,
          unit: LengthUnit.CM,
          date: "2025-06-08",
        },
      ],
      species: "Axolotl",
      status: PetStatus.ACTIVE,
      feedings: [
        {
          id: "f3",
          petId: "3",
          type: FeedingType.LIVE,
          foodName: "Earthworms",
          frequency: Frequency.EVERY_OTHER_DAY,
        },
      ],
      treatments: [
        {
          id: "t3",
          petId: "3",
          type: TreatmentType.ANTIPARASITIC,
          name: "Deworming",
          startDate: "2025-02-15",
          status: StatusType.COMPLETED,
        },
      ],
      events: [
        {
          id: "event3",
          petId: "3",
          type: EventType.CLEANING,
          title: "Filter maintenance",
          date: "2025-06-18",
          status: StatusType.COMPLETED,
        },
      ],
      reminders: [
        {
          id: "rem3",
          petId: "3",
          type: ReminderType.CLEANING,
          title: "Water change",
          frequency: Frequency.WEEKLY,
          status: StatusType.PLANNED,
        },
      ],
    },
  ],
};
