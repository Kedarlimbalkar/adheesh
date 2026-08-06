export type MonthStatus = "peak" | "off" | "sowing" | "none";

export interface HarvestRow {
  crop: string;
  months: Record<
    "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec",
    MonthStatus
  >;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] as const;

function row(crop: string, pattern: MonthStatus[]): HarvestRow {
  const months = {} as HarvestRow["months"];
  MONTHS.forEach((m, i) => (months[m] = pattern[i]));
  return { crop, months };
}

export const HARVEST_DATA: HarvestRow[] = [
  row("Turmeric", ["off","off","peak","peak","peak","off","off","off","off","sowing","sowing","off"]),
  row("Cumin Seeds", ["peak","peak","off","off","off","off","off","off","sowing","sowing","sowing","off"]),
  row("Black Pepper", ["off","off","peak","peak","off","off","off","off","off","off","sowing","sowing"]),
  row("Green Cardamom", ["off","off","off","off","off","off","off","peak","peak","peak","off","off"]),
  row("Red Chili", ["peak","peak","peak","off","off","off","off","off","off","sowing","sowing","sowing"]),
  row("Sesame Seeds", ["off","off","off","off","off","peak","peak","off","off","off","off","off"]),
  row("Mustard Seeds", ["peak","peak","off","off","off","off","off","off","off","sowing","sowing","off"]),
  row("Basmati Rice", ["off","off","off","off","off","off","off","off","off","peak","peak","off"]),
  row("Chickpeas", ["peak","peak","off","off","off","off","off","off","off","sowing","sowing","off"]),
];

export const MONTH_LABELS = MONTHS;
