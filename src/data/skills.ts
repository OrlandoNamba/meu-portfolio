export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Linguagens",
    items: ["TypeScript", "Java", "Python", "JavaScript", "Node"],
  },
  {
    label: "Web",
    items: ["Angular", "HTML", "CSS", "Express"],
  },
];
