import type { ReminderType } from "../types/reminder-type.ts";
import type { Frequency } from "../types/frequency-type.ts";
import type { Day } from "../types/day.ts";
import type { PriorityType } from "../types/priority-type.ts";
import type { StatusType } from "../types/status-type.ts";

export interface Reminder {
  id: string;
  petId: string;
  type: ReminderType;
  title?: string;
  description?: string;
  dueAt?: string;
  allDay?: boolean;
  interval?: number;
  byDay?: Array<Day>;
  byMonthDay?: number[];
  until?: string;
  priority?: PriorityType;
  status?: StatusType;
  snoozedUntil?: string;
  completedAt?: string;
  timezone?: string;
  frequency?: Frequency;
  createdAt?: string;
  updatedAt?: string;
  feedingId?: number;
  treatmentId?: number;
  groomingId?: number;
  measurementId?: number;
  vetContactId?: number;
  documentId?: number;
  habitatId?: number;
  related?: { entity: string; id: number };
  seriesId?: string;
  occurrenceId?: string;
}
