"use client";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export default function MiniRadialChart({ value, max = 100, color }) {
  const data = [
    {
      value: value,
      fill: color,
    },
  ];

  return (
    <div className="w-16 h-16 relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, max]} tick={false} />

          <RadialBar
            dataKey="value"
            background={{ fill: "hsl(var(--muted))" }}
            cornerRadius={10}
            stroke="none"
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* الرقم بالنص */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-foreground">
          {Math.round((value / max) * 100)}%
        </span>
      </div>
    </div>
  );
}
