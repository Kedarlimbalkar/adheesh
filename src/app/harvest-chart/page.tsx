import { HarvestChartTable, HarvestLegend } from "@/components/shared/harvest-chart-table";

export const metadata = {
  title: "Harvest & Seasonality Chart | Adheesh Overseas",
  description: "Month-by-month harvest and availability chart for Indian turmeric, spices, and oil seeds.",
};

export default function HarvestChartPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-2xl mb-8">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Seasonality</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-3">
          Crop Harvest &amp; Availability Chart
        </h1>
        <p className="mt-4 text-muted-foreground">
          A full-year matrix of peak harvest, sowing, and off-season availability for our key
          export commodities &mdash; useful for planning procurement schedules and shipment timing.
        </p>
      </div>

      <div className="mb-6">
        <HarvestLegend />
      </div>

      <HarvestChartTable />
    </div>
  );
}
