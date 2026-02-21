"use client";

import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// Fake database
const baseData = {
  "آخر 7 أيام": [
    { day: "السبت", visits: 120, requests: 9 },
    { day: "الأحد", visits: 140, requests: 12 },
    { day: "الإثنين", visits: 160, requests: 15 },
    { day: "الثلاثاء", visits: 180, requests: 14 },
    { day: "الأربعاء", visits: 200, requests: 17 },
    { day: "الخميس", visits: 220, requests: 20 },
    { day: "الجمعة", visits: 260, requests: 22 },
  ],

  "آخر 30 يوم": [
    { day: "الأسبوع 1", visits: 820, requests: 61 },
    { day: "الأسبوع 2", visits: 900, requests: 70 },
    { day: "الأسبوع 3", visits: 950, requests: 75 },
    { day: "الأسبوع 4", visits: 1040, requests: 90 },
  ],

  "آخر 90 يوم": [
    { day: "الشهر 1", visits: 3500, requests: 300 },
    { day: "الشهر 2", visits: 4200, requests: 350 },
    { day: "الشهر 3", visits: 4800, requests: 390 },
  ],

  "هذا العام": [
    { day: "يناير", visits: 4200, requests: 320 },
    { day: "فبراير", visits: 5100, requests: 410 },
    { day: "مارس", visits: 5500, requests: 450 },
    { day: "أبريل", visits: 6300, requests: 520 },
    { day: "مايو", visits: 7000, requests: 590 },
  ],
};

export default function ReportsPage() {
  const filters = ["آخر 7 أيام", "آخر 30 يوم", "آخر 90 يوم", "هذا العام"];
  const [filter, setFilter] = useState(filters[0]);

  const chartData = useMemo(() => baseData[filter], [filter]);

  const tableData = useMemo(() => {
    return chartData.map((item, idx) => ({
      id: idx + 1,
      period: item.day,
      visits: item.visits,
      requests: item.requests,
    }));
  }, [chartData]);

  // Excel Export
  const exportExcel = () => {
    const rows = [
      ["الفترة", "عدد الزيارات", "الطلبات"],
      ...tableData.map((r) => [r.period, r.visits, r.requests]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((e) => e.join(",")).join("\n");

    const a = document.createElement("a");
    a.href = encodeURI(csvContent);
    a.download = "report.csv";
    a.click();
  };

  // PDF Export
  const exportPDF = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<h1>تقرير الأداء</h1>");
    printWindow.document.write("<table border='1' style='width:100%;text-align:center'>");
    printWindow.document.write("<tr><th>الفترة</th><th>الزيارات</th><th>الطلبات</th></tr>");

    tableData.forEach((r) => {
      printWindow.document.write(
        `<tr><td>${r.period}</td><td>${r.visits}</td><td>${r.requests}</td></tr>`
      );
    });

    printWindow.document.write("</table>");
    printWindow.print();
    printWindow.close();
  };

  return (
    <div dir="rtl" className="p-6 space-y-8">
      {/* Filters + Export */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">عرض:</p>

          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] bg-background border-border text-foreground">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="bg-background text-right border-border">
              {filters.map((f, i) => (
                <SelectItem key={i} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={exportExcel} className="bg-green-600 hover:bg-green-700">
            تصدير Excel
          </Button>
          <Button onClick={exportPDF} className="bg-blue-600 hover:bg-blue-700">
            تصدير PDF
          </Button>
        </div>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>مخطط الزيارات والطلبات</CardTitle>
        </CardHeader>

        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visits" stroke="#8b5cf6" strokeWidth={3} />
              <Line type="monotone" dataKey="requests" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>ملخص الفترة المختارة</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted text-muted-foreground border-b">
                <tr>
                  <th className="py-2 px-4 text-right">الفترة</th>
                  <th className="py-2 px-4 text-right">عدد الزيارات</th>
                  <th className="py-2 px-4 text-right">طلبات المعاينة</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-muted/30">
                    <td className="py-2 px-4">{row.period}</td>
                    <td className="py-2 px-4">{row.visits}</td>
                    <td className="py-2 px-4">{row.requests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}