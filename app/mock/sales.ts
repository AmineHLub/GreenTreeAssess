export interface SaleEntry {
  date: Date;
  amount: number;
}

export type Year = string;

export type SalesByYear = Record<Year, SaleEntry[]>;

export const salesData: SalesByYear = {
  '2020': [
    { date: new Date('2020-01-03'), amount: 120 },
    { date: new Date('2020-01-15'), amount: 340 },
    { date: new Date('2020-02-02'), amount: 560 },
    { date: new Date('2020-02-18'), amount: 220 },
    { date: new Date('2020-03-01'), amount: 980 },
    { date: new Date('2020-03-21'), amount: 410 },
    { date: new Date('2020-04-05'), amount: 760 },
    { date: new Date('2020-04-22'), amount: 300 },
    { date: new Date('2020-05-10'), amount: 640 },
    { date: new Date('2020-06-14'), amount: 890 },
    { date: new Date('2020-07-02'), amount: 510 },
    { date: new Date('2020-08-09'), amount: 730 },
    { date: new Date('2020-09-11'), amount: 450 },
    { date: new Date('2020-10-06'), amount: 820 },
    { date: new Date('2020-11-19'), amount: 960 },
    { date: new Date('2020-12-27'), amount: 1100 }
  ],

  '2021': [
    { date: new Date('2021-01-04'), amount: 260 },
    { date: new Date('2021-01-20'), amount: 540 },
    { date: new Date('2021-02-08'), amount: 390 },
    { date: new Date('2021-03-03'), amount: 720 },
    { date: new Date('2021-03-29'), amount: 610 },
    { date: new Date('2021-04-11'), amount: 980 },
    { date: new Date('2021-05-07'), amount: 430 },
    { date: new Date('2021-06-02'), amount: 870 },
    { date: new Date('2021-06-26'), amount: 540 },
    { date: new Date('2021-07-19'), amount: 1020 },
    { date: new Date('2021-08-13'), amount: 760 },
    { date: new Date('2021-09-04'), amount: 690 },
    { date: new Date('2021-10-16'), amount: 1150 },
    { date: new Date('2021-11-21'), amount: 940 },
    { date: new Date('2021-12-30'), amount: 1280 }
  ],

  '2022': [
    { date: new Date('2022-01-02'), amount: 420 },
    { date: new Date('2022-01-17'), amount: 860 },
    { date: new Date('2022-02-09'), amount: 530 },
    { date: new Date('2022-03-14'), amount: 990 },
    { date: new Date('2022-04-01'), amount: 610 },
    { date: new Date('2022-04-28'), amount: 780 },
    { date: new Date('2022-05-15'), amount: 920 },
    { date: new Date('2022-06-10'), amount: 1340 },
    { date: new Date('2022-07-06'), amount: 870 },
    { date: new Date('2022-08-18'), amount: 1040 },
    { date: new Date('2022-09-09'), amount: 680 },
    { date: new Date('2022-10-20'), amount: 1430 },
    { date: new Date('2022-11-11'), amount: 1190 },
    { date: new Date('2022-12-23'), amount: 1580 }
  ],

  '2023': [
    { date: new Date('2023-01-05'), amount: 510 },
    { date: new Date('2023-01-27'), amount: 890 },
    { date: new Date('2023-02-14'), amount: 740 },
    { date: new Date('2023-03-08'), amount: 1180 },
    { date: new Date('2023-03-31'), amount: 920 },
    { date: new Date('2023-04-19'), amount: 1360 },
    { date: new Date('2023-05-03'), amount: 780 },
    { date: new Date('2023-06-11'), amount: 1490 },
    { date: new Date('2023-07-01'), amount: 1120 },
    { date: new Date('2023-08-16'), amount: 1650 },
    { date: new Date('2023-09-07'), amount: 980 },
    { date: new Date('2023-10-22'), amount: 1720 },
    { date: new Date('2023-11-14'), amount: 1410 },
    { date: new Date('2023-12-29'), amount: 1890 }
  ],

  '2024': [
    { date: new Date('2024-01-06'), amount: 640 },
    { date: new Date('2024-01-25'), amount: 1080 },
    { date: new Date('2024-02-12'), amount: 920 },
    { date: new Date('2024-03-09'), amount: 1540 },
    { date: new Date('2024-04-04'), amount: 1210 },
    { date: new Date('2024-05-01'), amount: 1680 },
    { date: new Date('2024-06-07'), amount: 1420 },
    { date: new Date('2024-07-15'), amount: 1890 },
    { date: new Date('2024-08-03'), amount: 1620 },
    { date: new Date('2024-09-21'), amount: 2140 },
    { date: new Date('2024-10-12'), amount: 1760 },
    { date: new Date('2024-11-18'), amount: 2310 },
    { date: new Date('2024-12-28'), amount: 2590 }
  ],

  '2025': [
    { date: new Date('2025-01-04'), amount: 780 },
    { date: new Date('2025-01-22'), amount: 1340 },
    { date: new Date('2025-02-10'), amount: 1180 },
    { date: new Date('2025-03-06'), amount: 1920 },
    { date: new Date('2025-04-02'), amount: 1560 },
    { date: new Date('2025-05-09'), amount: 2180 },
    { date: new Date('2025-06-14'), amount: 1850 },
    { date: new Date('2025-07-08'), amount: 2470 },
    { date: new Date('2025-08-19'), amount: 2140 },
    { date: new Date('2025-09-30'), amount: 2760 },
    { date: new Date('2025-10-17'), amount: 2380 },
    { date: new Date('2025-11-23'), amount: 3020 },
    { date: new Date('2025-12-31'), amount: 3340 }
  ]
};