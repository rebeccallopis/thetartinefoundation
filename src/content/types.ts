export type FactCategory =
  | "Creativity"
  | "Arts Education"
  | "STEM + STEAM"
  | "Child Development"
  | "Learning"
  | "Experimentation"
  | "Collaboration";

export type Fact = {
  title: string;
  summary: string;
  statistic: string;
  source: string;
  organization: string;
  publicationDate: string;
  url: string;
  category: FactCategory;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  background?: string;
  status: "confirmed" | "in-conversation";
};

export type Program = {
  title: string;
  status: "in-development" | "planned";
  ageRange: string;
  format: string;
  summary: string;
  topics: string[];
};
