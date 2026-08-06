import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HarvestChartTable, HarvestLegend } from "@/components/shared/harvest-chart-table";

export function HarvestTeaser() {
  return (
    <section className="container py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Seasonality
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Crop Harvest &amp; Availability Chart
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Plan your procurement around India&apos;s harvest calendar for turmeric, spices, oil
            seeds, and grains.
          </p>
        </div>
        <Link
          href="/harvest-chart"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline shrink-0"
        >
          View Full Harvest Chart <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <HarvestLegend />
      <div className="mt-6">
        <HarvestChartTable />
      </div>
    </section>
  );
}
