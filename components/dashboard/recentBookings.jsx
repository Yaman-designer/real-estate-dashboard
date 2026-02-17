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
import { useState } from "react";

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

import { MoreHorizontal, ChevronRight } from "lucide-react";

const bookings = [
  { id: 1, guest: "Sarah Ahmed", room: "101", date: "2026-02-01", status: "Confirmed" },
  { id: 2, guest: "Omar Khaled", room: "203", date: "2026-02-02", status: "Pending" },
  { id: 3, guest: "Lina Noor", room: "305", date: "2026-02-03", status: "Cancelled" },
];

export default function RecentBookings() {
  const handleDelete = (id) => {
    console.log("Delete booking", id);
  };

  const [selectedBooking, setSelectedBooking] = useState(null);

  return (
    <>
      <div className="w-full flex justify-between items-center pt-5">
        <h1 className="text-xl font-bold text-foreground">Recent Bookings</h1>

        <button className="group flex items-center gap-2 bg-transparent text-muted-foreground font-medium text-lg hover:text-foreground">
          see all
          <ChevronRight className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1.5" />
        </button>
      </div>

      {/* Table */}
      <div className="mt-5 overflow-x-auto bg-card text-card-foreground rounded-md shadow-md p-3 border border-border">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground">Guest</TableHead>
              <TableHead className="text-muted-foreground">Room</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookings.map((booking) => (
              <TableRow
                key={booking.id}
                className="hover:bg-muted transition border-border"
              >
                <TableCell className="font-medium text-foreground">
                  {booking.guest}
                </TableCell>

                <TableCell className="text-foreground">{booking.room}</TableCell>

                <TableCell className="text-sm text-muted-foreground">
                  {booking.date}
                </TableCell>

                <TableCell>
                  <StatusBadge status={booking.status} />
                </TableCell>

                {/* Actions column */}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="w-5 h-5 cursor-pointer text-muted-foreground hover:text-foreground" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="end"
                      className="bg-popover text-popover-foreground border-border"
                    >
                      {/* View Dialog */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            View
                          </DropdownMenuItem>
                        </DialogTrigger>

                        <DialogContent className="bg-popover text-popover-foreground border-border">
                          <DialogHeader>
                            <DialogTitle>Booking Details</DialogTitle>
                          </DialogHeader>

                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Guest:</span>{" "}
                              {booking.guest}
                            </p>
                            <p>
                              <span className="font-medium">Room:</span>{" "}
                              {booking.room}
                            </p>
                            <p>
                              <span className="font-medium">Date:</span>{" "}
                              {booking.date}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="font-medium">Status:</span>{" "}
                              <StatusBadge status={booking.status} />
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
                            Delete
                          </DropdownMenuItem>
                        </AlertDialogTrigger>

                        <AlertDialogContent className="bg-popover text-popover-foreground border-border">
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground">
                              This action cannot be undone. This will permanently delete this booking.
                            </AlertDialogDescription>
                          </AlertDialogHeader>

                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-border">
                              Cancel
                            </AlertDialogCancel>

                            <AlertDialogAction
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              onClick={() => handleDelete(booking.id)}
                            >
                              Delete
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

function StatusBadge({ status }) {
  const styles = {
    Confirmed: "bg-green-500/15 text-green-600 border border-green-500/25",
    Pending: "bg-yellow-500/15 text-yellow-700 border border-yellow-500/25",
    Cancelled: "bg-red-500/15 text-red-600 border border-red-500/25",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
