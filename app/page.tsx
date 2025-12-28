"use client";
import { useState } from "react";
import { type SalesByYear, salesData } from "./mock/sales";
import ChartArea from "./components/ui/ChartArea";
import YearSelector from "./components/ui/YearSelector";
import ChartTypeSelector from "./components/ui/ChartTypeSelector";

type ChartType = "doughnut" | "bar" | "line";

export default function Dashboard() {
  const sales: SalesByYear = salesData;

  const years = Object.keys(sales).sort();
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [chartType, setChartType] = useState<ChartType>("doughnut");

  return (
    <div className="bg-zinc-50 dark:bg-black h-screen w-screen p-6">
      <main className="h-full w-full rounded-xl bg-white dark:bg-zinc-900 p-4 flex flex-col lg:flex-row gap-4">
        {/* LEFT / TOP CONTROLS */}
        <aside className="lg:w-64 w-full flex flex-col gap-6">
          <h1 className="text-xl text-center font-bold text-zinc-900 dark:text-white">
            Empty Dashboard 🥱
          </h1>

          {/* Chart Type Selector */}
          <ChartTypeSelector
            chartType={chartType}
            setChartType={setChartType}
          />

          <YearSelector
            years={years}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </aside>

        <ChartArea sales={sales} selectedYear={selectedYear} chartType={chartType} />
      </main>
    </div>
  );
}
