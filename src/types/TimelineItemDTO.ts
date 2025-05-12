export type TimelineItemDTO = {
  icon: (_props: Record<string, any>) => any;
  title: string;
  date: string;
  company: string;
  experienceHighlights: string[];
};
