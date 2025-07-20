export type Category = "Work" | "Personal" | "Other";

export interface IEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  notes?: string;
  archived: boolean;
  category: Category;
}
