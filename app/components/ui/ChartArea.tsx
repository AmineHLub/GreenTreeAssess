
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { SalesByYear } from '@/app/mock/sales';
import { useMemo } from 'react'
import { Doughnut, Bar, Line } from "react-chartjs-2";

function backgroundGenerator(data: number[]) {
  const max = Math.max(...data);
  const min = Math.min(...data);

  return data.map((value) => {
    const ratio = (value - min) / (max - min);
    const red = Math.floor(255 * (1 - ratio));
    const green = Math.floor(255 * ratio);
    const blue = 150;

    return `rgba(${red}, ${green}, ${blue}, 0.7)`;
  });
}

export default function ChartArea({ sales, selectedYear, chartType }: { sales: SalesByYear, selectedYear: string, chartType: "doughnut" | "bar" | "line" }) {


  ChartJS.register(
    ArcElement,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );

  const chartData = useMemo(() => {
    const entries = sales[selectedYear];
    const amounts = entries.map((s) => s.amount);

    return {
      labels: entries.map((s) =>
        s.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      ),
      datasets: [
        {
          label: `Sales ${selectedYear}`,
          data: amounts,
          backgroundColor: backgroundGenerator(amounts),
          borderColor: "#6366f1",
          borderWidth: chartType === "line" ? 2 : 0,
        },
      ],
    };
  }, [sales, selectedYear, chartType]);
  return (
    <section className="flex-1 rounded-lg bg-zinc-50 dark:bg-zinc-800 p-4 md:py-[5%] flex items-center justify-center">
      {chartType === "doughnut" && <Doughnut data={chartData} />}
      {chartType === "bar" && <Bar data={chartData} />}
      {chartType === "line" && <Line data={chartData} />}
    </section>
  )
}
