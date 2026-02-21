"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DataTable({ data: initialData }) {
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filter, setFilter] = useState("all");
  const [deletedRows, setDeletedRows] = useState([]);

  let className = "text-muted-foreground text-right";

  const deleteSelected = () => {
    setDeletedRows((prev) => [...prev, ...selectedRows]);
    setData((prev) => prev.filter((row) => !selectedRows.includes(row.id)));
    setSelectedRows([]);
  };

  // فلترة حسب حالة العقار
  const filteredData = data.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = (checked) => {
    setSelectedRows(checked ? filteredData.map((d) => d.id) : []);
  };

  const toggleStatus = (id) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              status:
                row.status === "نشط"
                  ? "معلق"
                  : row.status === "معلق"
                    ? "مرفوض"
                    : "نشط",
            }
          : row,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {/* الفلتر */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Select onValueChange={setFilter} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-background border-border text-foreground">
            <SelectValue placeholder="فلترة حسب الحالة" />
          </SelectTrigger>

          <SelectContent className="bg-background text-right text-popover-foreground border-border">
            <SelectItem value="all">جميع الحالات</SelectItem>
            <SelectItem value="نشط">نشط</SelectItem>
            <SelectItem value="معلق">معلق</SelectItem>
            <SelectItem value="مرفوض">مرفوض</SelectItem>
          </SelectContent>
        </Select>
        {/* زر الحذف */}
        <button
          onClick={deleteSelected}
          disabled={selectedRows.length === 0}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 disabled:opacity-50"
        >
          حذف العقارات المحددة
        </button>
      </div>

      {/* جدول العقارات */}
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="w-10 text-muted-foreground">
              <Checkbox
                checked={
                  selectedRows.length === filteredData.length &&
                  filteredData.length > 0
                }
                onCheckedChange={toggleSelectAll}
              />
            </TableHead>

            <TableHead className={`${className}`}>اسم العقار</TableHead>
            <TableHead className={`${className}`}>المدينة</TableHead>
            <TableHead className={`${className}`}>النوع</TableHead>
            <TableHead className={`${className}`}>السعر</TableHead>
            <TableHead className={`${className}`}>المالك</TableHead>
            <TableHead className={`${className}`}>الحالة</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id} className="border-border">
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onCheckedChange={() => toggleRow(row.id)}
                />
              </TableCell>

              <TableCell className="font-medium text-foreground">
                {row.propertyName}
              </TableCell>

              <TableCell className="text-foreground">{row.city}</TableCell>

              <TableCell className="text-foreground">{row.type}</TableCell>

              <TableCell className="text-foreground">{row.price}</TableCell>

              <TableCell className="text-foreground">{row.owner}</TableCell>

              <TableCell>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toggleStatus(row.id)}
                  className={
                    row.status === "نشط"
                      ? "border-green-500/40 text-green-600"
                      : row.status === "معلق"
                        ? "border-yellow-500/40 text-yellow-600"
                        : "border-red-500/40 text-red-600"
                  }
                >
                  {row.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
