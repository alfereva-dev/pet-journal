export interface Document {
  id: string;
  petId: string;
  type: DocumentType;
  number?: string;
  issuedBy?: string;
  validFrom?: string;
  validTo?: string;
  attachments?: string[];
  note?: string;
}
