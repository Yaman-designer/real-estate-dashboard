"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 400 },
  { day: "Tue", value: 300 },
  { day: "Wed", value: 500 },
  { day: "Thu", value: 200 },
  { day: "Fri", value: 150 },
  { day: "Sat", value: 220 },
  { day: "Sun", value: 180 },
];

export default function WeeklyAreaChart() {
  return (
    <div className="mt-5 bg-card text-card-foreground rounded-lg border border-border p-4">
      <h2 className="text-lg font-semibold mb-4 text-foreground">
       الإضافات الجديدة أسبوعياً
      </h2>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart  data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
            />

            {/* X Axis */}
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />

            {/* Y Axis */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={false}
              wrapperStyle={{
                outline: "none",
              }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--popover))",
                color: "hsl(var(--popover-foreground))",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                fontSize: "12px",
              }}
            />

            {/* Main Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
              activeDot={{
                r: 4,
                stroke: "none",
                fill: "hsl(var(--primary))",
              }}
              isAnimationActive
              animationDuration={2000}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
