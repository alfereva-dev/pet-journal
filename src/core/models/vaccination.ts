export interface Vaccination {
  id: string;
  petId: string;
  name: string;
  date: string;
  batchNumber?: string;
  performedBy?: string;
  nextDueDate?: string;
  note?: string;
}
