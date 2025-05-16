export type RouteDTO = {
  path: string;
  label: string;
  icon: (_props: Record<string, any>) => any;
  targetBlank?: boolean;
};
