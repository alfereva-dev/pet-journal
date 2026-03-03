import { DocumentType } from "../types/document-type.ts";

export interface Document {
  id: string;
  userId: string;
  petId: string;
  type: DocumentType;
  number?: string;
  issuedBy?: string;
  validFrom?: string;
  validTo?: string;
  tags?: string;
  attachments?: string[];
  files: DocFile[];
  note?: string;
}

export interface DocFile {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  storageKey: string;
  checksum?: string;
  pageCount?: number;
  uploadedAt: string;
  uploadedBy: string;
}
