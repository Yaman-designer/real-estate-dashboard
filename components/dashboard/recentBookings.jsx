"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, ChevronLeft } from "lucide-react";
import { useState } from "react";

// ✅ بيانات تجريبية للعقارات
const properties = [
  {
    id: "RE-1021",
    title: "شقة حديثة قرب المركز",
    type: "شقة",
    listingType: "للإيجار",
    price: 12000,
    currency: "TRY",
    city: "قونية",
    status: "Published",
    views: 248,
    createdAt: "2026-02-01",
    image: "/4382561e7e6ab36173ba8ac81c51ad00.jpg",
  },
  {
    id: "RE-1022",
    title: "فيلا فاخرة مع حديقة",
    type: "فيلا",
    listingType: "للبيع",
    price: 3250000,
    currency: "TRY",
    city: "إسطنبول",
    status: "Pending",
    views: 540,
    createdAt: "2026-02-03",
    image: "/4dd3a8822ea0ad4f066c2a084d23852c.jpg",
  },
  {
    id: "RE-1023",
    title: "بيت مستقل بسعر مناسب",
    type: "بيت",
    listingType: "للبيع",
    price: 850000,
    currency: "TRY",
    city: "أنقرة",
    status: "Draft",
    views: 61,
    createdAt: "2026-02-05",
    image: "/fabe7070e9b1330ab3bd4c7dfc4f8444.jpg",
  },
];

function formatMoney(value, currency) {
  try {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: currency || "TRY",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `${value} ${currency || "TRY"}`;
  }
}

export default function RecentProperties() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  let classStyle = "text-muted-foreground text-right";
  const handleDelete = (id) => {
    console.log("Delete property", id);
    // هنا لاحقاً: استدعاء API للحذف
  };

  return (
    <>
      <div className="w-full flex justify-between items-center pt-5">
        <h1 className="text-xl font-semibold text-foreground">
          أحدث العقارات المضافة
        </h1>

        <button className="group flex items-center gap-2 bg-transparent text-muted-foreground font-medium text-lg hover:text-foreground">
          شاهد المزيد
          <ChevronLeft className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1.5" />
        </button>
      </div>

      {/* Table */}
      <div className="mt-5 overflow-x-auto bg-card text-card-foreground rounded-md shadow-md p-3 border border-border">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className={classStyle}>صورة</TableHead>
              <TableHead className={classStyle}>رقم العقار (ID)</TableHead>
              <TableHead className={classStyle}>العنوان</TableHead>
              <TableHead className={classStyle}>النوع</TableHead>
              <TableHead className={classStyle}>للبيع / للإيجار</TableHead>
              <TableHead className={classStyle}>السعر</TableHead>
              <TableHead className={classStyle}>المدينة</TableHead>
              <TableHead className={classStyle}>الحالة</TableHead>
              <TableHead className={classStyle}>المشاهدات</TableHead>
              <TableHead className={classStyle}>تاريخ الإضافة</TableHead>
              <TableHead className={classStyle}>إجراءات</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {properties.map((p) => (
              <TableRow
                key={p.id}
                className="hover:bg-muted transition border-border"
              >
                {/* Image */}
                <TableCell>
                  <div className="h-10 w-14 overflow-hidden rounded-md border border-border bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </TableCell>

                {/* ID */}
                <TableCell className="font-medium text-foreground">
                  {p.id}
                </TableCell>

                {/* Title */}
                <TableCell className="text-foreground max-w-[160px] truncate">
                  {p.title}
                </TableCell>

                {/* Type */}
                <TableCell className="text-sm text-muted-foreground">
                  {p.type}
                </TableCell>

                {/* Listing type */}
                <TableCell className="text-sm text-muted-foreground">
                  {p.listingType}
                </TableCell>

                {/* Price */}
                <TableCell className="text-foreground">
                  {formatMoney(p.price, p.currency)}
                </TableCell>

                {/* City */}
                <TableCell className="text-sm text-muted-foreground">
                  {p.city}
                </TableCell>

                {/* Status */}
                <TableCell>
                  <StatusBadge status={p.status} />
                </TableCell>

                {/* Views */}
                <TableCell className="text-sm text-muted-foreground">
                  {p.views}
                </TableCell>

                {/* Date */}
                <TableCell className="text-sm text-muted-foreground">
                  {p.createdAt}
                </TableCell>

                {/* Actions */}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
                        aria-label="Actions"
                      >
                        <MoreHorizontal className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="end"
                      className="bg-popover text-popover-foreground border-border"
                    >
                      {/* View Dialog */}
                      <Dialog
                        open={selectedProperty?.id === p.id}
                        onOpenChange={(open) =>
                          setSelectedProperty(open ? p : null)
                        }
                      >
                        <DialogTrigger asChild>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            عرض التفاصيل
                          </DropdownMenuItem>
                        </DialogTrigger>

                        <DialogContent className="bg-background text-popover-foreground border-border">
                          <DialogHeader>
                            <DialogTitle>تفاصيل العقار</DialogTitle>
                          </DialogHeader>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                              <div className="h-14 w-20 overflow-hidden rounded-md border border-border bg-muted">
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <div className="min-w-0">
                                <p className="font-medium text-foreground truncate">
                                  {p.title}
                                </p>
                                <p className="text-muted-foreground">
                                  ID: {p.id}
                                </p>
                              </div>
                            </div>

                            <p>
                              <span className="font-medium">النوع:</span>{" "}
                              {p.type}
                            </p>
                            <p>
                              <span className="font-medium">التصنيف:</span>{" "}
                              {p.listingType}
                            </p>
                            <p>
                              <span className="font-medium">السعر:</span>{" "}
                              {formatMoney(p.price, p.currency)}
                            </p>
                            <p>
                              <span className="font-medium">المدينة:</span>{" "}
                              {p.city}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="font-medium">الحالة:</span>{" "}
                              <StatusBadge status={p.status} />
                            </p>
                            <p>
                              <span className="font-medium">المشاهدات:</span>{" "}
                              {p.views}
                            </p>
                            <p>
                              <span className="font-medium">
                                تاريخ الإضافة:
                              </span>{" "}
                              {p.createdAt}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Delete Dialog */}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                            className="text-destructive focus:text-destructive"
                          >
                            حذف
                          </DropdownMenuItem>
                        </AlertDialogTrigger>

                        <AlertDialogContent
                          dir="ltr"
                          className="bg-background text-popover-foreground border-border "
                        >
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-right">
                              هل أنتِ متأكدة؟
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground text-right">
                              هذا الإجراء لا يمكن التراجع عنه، وسيتم حذف العقار
                              نهائياً.
                            </AlertDialogDescription>
                          </AlertDialogHeader>

                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-border ">
                              إلغاء
                            </AlertDialogCancel>

                            <AlertDialogAction
                              className="bg-red-600 text-white hover:bg-destructive/90"
                              onClick={() => handleDelete(p.id)}
                            >
                              حذف
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

// ✅ Badge للحالات (عقارات)
function StatusBadge({ status }) {
  const map = {
    Published: {
      label: "منشور",
      cls: "bg-green-500/15 text-green-600 border border-green-500/25",
    },
    Pending: {
      label: "بانتظار المراجعة",
      cls: "bg-yellow-500/15 text-yellow-700 border border-yellow-500/25",
    },
    Draft: {
      label: "مسودة",
      cls: "bg-zinc-500/15 text-zinc-700 border border-zinc-500/25",
    },
    Rejected: {
      label: "مرفوض",
      cls: "bg-red-500/15 text-red-600 border border-red-500/25",
    },
    Archived: {
      label: "مؤرشف",
      cls: "bg-blue-500/15 text-blue-700 border border-blue-500/25",
    },
  };

  const item = map[status] || {
    label: status,
    cls: "bg-muted text-muted-foreground border border-border",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${item.cls}`}>
      {item.label}
    </span>
  );
}
