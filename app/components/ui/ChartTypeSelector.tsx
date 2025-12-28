export default function ChartTypeSelector({ chartType, setChartType }: { chartType: "doughnut" | "bar" | "line", setChartType: (type: "doughnut" | "bar" | "line") => void }) {
  type ChartType = "doughnut" | "bar" | "line";

  return (
              <div className="flex justify-center lg:flex-col gap-2">
            {(["doughnut", "bar", "line"] as ChartType[]).map((type) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition
                  ${
                    chartType === type
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
  )
}
