export interface Notes {
  notes?: NotesEntity[] | null;
}
export interface NotesEntity {
  id: number;
  header: string;
  noteBody: string;
}
