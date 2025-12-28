import React from 'react'

export default function YearSelector({ years, selectedYear, setSelectedYear }: { years: string[], selectedYear: string, setSelectedYear: (year: string) => void }) {
  return (
    <div className="flex justify-center flex-wrap lg:flex-col gap-2 overflow-x-auto">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition
                  ${selectedYear === year
              ? "bg-zinc-900 dark:bg-white text-white dark:text-black"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            }`}
        >
          {year}
        </button>
      ))}
    </div>
  )
}
