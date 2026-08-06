import { HARVEST_DATA, MONTH_LABELS, type MonthStatus } from "@/data/harvest";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<MonthStatus, string> = {
  peak: "bg-secondary text-secondary-foreground",
  off: "bg-muted text-muted-foreground",
  sowing: "bg-primary/20 text-primary",
  none: "bg-transparent",
};

const STATUS_LABEL: Record<MonthStatus, string> = {
  peak: "Peak",
  off: "Off",
  sowing: "Sowing",
  none: "",
};

export function HarvestChartTable() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[900px] text-sm border-collapse">
        <thead>
          <tr className="bg-muted/70">
            <th className="sticky left-0 bg-muted/70 text-left px-4 py-3 font-display font-semibold text-ink">
              Crop
            </th>
            {MONTH_LABELS.map((m) => (
              <th key={m} className="px-2 py-3 text-center font-semibold text-ink/70 text-xs">
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HARVEST_DATA.map((row) => (
            <tr key={row.crop} className="border-t border-border">
              <td className="sticky left-0 bg-card px-4 py-3 font-medium text-ink whitespace-nowrap">
                {row.crop}
              </td>
              {MONTH_LABELS.map((m) => {
                const status = row.months[m];
                return (
                  <td key={m} className="px-1.5 py-2 text-center">
                    {status !== "none" ? (
                      <span
                        className={cn(
                          "inline-block w-full rounded-md px-1.5 py-1 text-[10px] font-semibold",
                          STATUS_STYLES[status]
                        )}
                      >
                        {STATUS_LABEL[status]}
                      </span>
                    ) : (
                      <span className="inline-block w-full text-muted-foreground/30">&mdash;</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function HarvestLegend() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="peak">Peak Harvest Season</Badge>
      <Badge variant="sowing">Plant / Sowing Period</Badge>
      <Badge variant="off">Off-Season Availability</Badge>
    </div>
  );
}
