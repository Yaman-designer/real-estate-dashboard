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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

const initialRequests = [
  {
    id: 1,
    requesterName: "أحمد علي",
    contact: "ahmed@example.com",
    propertyName: "شقة فاخرة مطلة على البحر",
    type: "استفسار",
    message: "أرغب بمعرفة تفاصيل التقسيط المتاحة لهذا العقار.",
    status: "جديد",
  },
  {
    id: 2,
    requesterName: "سارة محمد",
    contact: "+90 555 123 4567",
    propertyName: "فيلا حديثة مع مسبح",
    type: "حجز معاينة",
    message: "أرغب بحجز موعد لمعاينة العقار يوم السبت.",
    status: "قيد المراجعة",
  },
  {
    id: 3,
    requesterName: "خالد يوسف",
    contact: "khaled@example.com",
    propertyName: "محل تجاري في مركز المدينة",
    type: "طلب تواصل",
    message: "من فضلكم تواصلوا معي بخصوص السعر النهائي.",
    status: "مغلق",
  },
];

export default function RequestsMessagesPage() {
  const [data, setData] = useState(initialRequests);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filter, setFilter] = useState("all");

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newRequest, setNewRequest] = useState({
    requesterName: "",
    contact: "",
    propertyName: "",
    type: "",
    message: "",
    status: "جديد",
  });

  const className = "text-muted-foreground text-right";

  // فلترة حسب حالة الطلب
  const filteredData = data.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  // تحديد / إلغاء تحديد صف واحد
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // تحديد / إلغاء تحديد الكل
  const toggleSelectAll = (checked) => {
    setSelectedRows(checked ? filteredData.map((d) => d.id) : []);
  };

  // تغيير حالة الطلب (دورة: جديد → قيد المراجعة → مغلق → جديد)
  const toggleStatus = (id) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              status:
                row.status === "جديد"
                  ? "قيد المراجعة"
                  : row.status === "قيد المراجعة"
                  ? "مغلق"
                  : "جديد",
            }
          : row
      )
    );
  };

  // حذف الطلبات المحددة
  const deleteSelected = () => {
    setData((prev) => prev.filter((row) => !selectedRows.includes(row.id)));
    setSelectedRows([]);
  };

  // إضافة طلب جديد
  const addRequest = () => {
    // تحقق بسيط: ما نضيف طلب فاضي
    if (!newRequest.requesterName || !newRequest.contact || !newRequest.message) {
      return;
    }

    const maxId = data.length ? Math.max(...data.map((r) => r.id)) : 0;

    setData((prev) => [
      ...prev,
      {
        id: maxId + 1,
        ...newRequest,
      },
    ]);

    // نرجع الفورم للوضع الافتراضي
    setNewRequest({
      requesterName: "",
      contact: "",
      propertyName: "",
      type: "",
      message: "",
      status: "جديد",
    });

    setShowAddDialog(false);
  };

  return (
    <div dir="rtl" className="space-y-6 p-4 sm:p-6 lg:p-8 text-foreground">
      {/* الفلتر + زر الحذف + زر الإضافة */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* فلترة حسب حالة الطلب */}
        <Select onValueChange={setFilter} defaultValue="all">
          <SelectTrigger className="w-[200px] bg-background border-border text-foreground">
            <SelectValue placeholder="فلترة حسب الحالة" />
          </SelectTrigger>

          <SelectContent className="bg-background text-right text-popover-foreground border-border">
            <SelectItem value="all">جميع الحالات</SelectItem>
            <SelectItem value="جديد">جديد</SelectItem>
            <SelectItem value="قيد المراجعة">قيد المراجعة</SelectItem>
            <SelectItem value="مغلق">مغلق</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex flex-col sm:flex-row gap-2">
          {/* زر إضافة طلب جديد */}
          <Button
            onClick={() => setShowAddDialog(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            إضافة طلب جديد
          </Button>

          {/* زر حذف الطلبات المحددة */}
          <Button
            onClick={deleteSelected}
            disabled={selectedRows.length === 0}
            className="bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
          >
            حذف الطلبات المحددة ({selectedRows.length})
          </Button>
        </div>
      </div>

      {/* جدول الطلبات */}
      <div className="bg-card text-card-foreground border border-border rounded-lg overflow-hidden">
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

              <TableHead className={className}>اسم صاحب الطلب</TableHead>
              <TableHead className={className}>وسيلة التواصل</TableHead>
              <TableHead className={className}>العقار</TableHead>
              <TableHead className={className}>نوع الطلب</TableHead>
              <TableHead className={className}>محتوى الرسالة</TableHead>
              <TableHead className={className}>الحالة</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.map((row) => (
              <TableRow
                key={row.id}
                className="border-border hover:bg-muted/40"
              >
                {/* اختيار الصف */}
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onCheckedChange={() => toggleRow(row.id)}
                  />
                </TableCell>

                {/* البيانات */}
                <TableCell className="font-medium text-foreground">
                  {row.requesterName}
                </TableCell>

                <TableCell className="text-foreground">
                  {row.contact}
                </TableCell>

                <TableCell className="text-foreground">
                  {row.propertyName}
                </TableCell>

                <TableCell className="text-foreground">
                  {row.type || "-"}
                </TableCell>

                <TableCell className="text-foreground max-w-sm truncate">
                  {row.message}
                </TableCell>

                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(row.id)}
                    className={
                      row.status === "جديد"
                        ? "border-blue-500/40 text-blue-600"
                        : row.status === "قيد المراجعة"
                        ? "border-yellow-500/40 text-yellow-600"
                        : "border-green-500/40 text-green-600"
                    }
                  >
                    {row.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {filteredData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-6 text-muted-foreground"
                >
                  لا توجد طلبات مطابقة لخيارات الفلترة الحالية.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Dialog إضافة طلب جديد */}
      <AlertDialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <AlertDialogContent className="bg-background text-popover-foreground border-border" dir="rtl">
          <AlertDialogHeader>
            <AlertDialogTitle>إضافة طلب جديد</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              يمكنك هنا إضافة طلب جديد إلى قائمة الطلبات والرسائل.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="space-y-3 py-2">
            <Input
              placeholder="اسم صاحب الطلب"
              value={newRequest.requesterName}
              onChange={(e) =>
                setNewRequest({ ...newRequest, requesterName: e.target.value })
              }
              className="bg-background border-border text-foreground"
            />

            <Input
              placeholder="وسيلة التواصل (بريد، رقم هاتف...)"
              value={newRequest.contact}
              onChange={(e) =>
                setNewRequest({ ...newRequest, contact: e.target.value })
              }
              className="bg-background border-border text-foreground"
            />

            <Input
              placeholder="اسم العقار (اختياري)"
              value={newRequest.propertyName}
              onChange={(e) =>
                setNewRequest({ ...newRequest, propertyName: e.target.value })
              }
              className="bg-background border-border text-foreground"
            />

            <Input
              placeholder="نوع الطلب (استفسار، حجز معاينة، طلب تواصل...)"
              value={newRequest.type}
              onChange={(e) =>
                setNewRequest({ ...newRequest, type: e.target.value })
              }
              className="bg-background border-border text-foreground"
            />

            <Input
              placeholder="محتوى الرسالة"
              value={newRequest.message}
              onChange={(e) =>
                setNewRequest({ ...newRequest, message: e.target.value })
              }
              className="bg-background border-border text-foreground"
            />
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel className="border-border">
              إلغاء
            </AlertDialogCancel>
            <AlertDialogAction onClick={addRequest}>
              حفظ الطلب
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}