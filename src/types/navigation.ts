export type SidebarItemKey =
  | "live"
  | "recorded"
  | "assignments"
  | "flashcards"
  | "reference";

export type SidebarItem = {
  key: SidebarItemKey;
  label: string;
};
