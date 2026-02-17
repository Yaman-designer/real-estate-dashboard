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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function DataTable({ data: initialData, type = "rooms" }) {
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [filter, setFilter] = useState("all");

  const [newRoom, setNewRoom] = useState({
    roomName: "",
    bedType: "",
    floor: "",
    facilities: "",
    rate: "",
    status: "Available",
  });

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredData = data.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  const toggleSelectAll = (checked) => {
    setSelectedRows(checked ? filteredData.map((d) => d.id) : []);
  };

  const confirmDelete = () => {
    setData((prev) => prev.filter((row) => !selectedRows.includes(row.id)));
    setSelectedRows([]);
    setShowDeleteDialog(false);
  };

  const addRoom = () => {
    if (type !== "rooms") return;

    const maxId = data.length ? Math.max(...data.map((d) => d.id)) : 0;

    setData([
      ...data,
      {
        id: maxId + 1,
        image: "/room.jpg",
        roomNumber: `R-${maxId + 1}`,
        ...newRoom,
      },
    ]);

    setNewRoom({
      roomName: "",
      bedType: "",
      floor: "",
      facilities: "",
      rate: "",
      status: "Available",
    });

    setShowAddDialog(false);
  };

  const toggleStatus = (id) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              status: row.status === "Available" ? "Booked" : "Available",
            }
          : row
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* الفلتر والأزرار */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Select onValueChange={setFilter} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-background border-border text-foreground">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>

          <SelectContent className="bg-popover text-popover-foreground border-border">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Booked">Booked</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-3">
          {type === "rooms" && (
            <Button onClick={() => setShowAddDialog(true)}>Add Room</Button>
          )}

          {selectedRows.length > 0 && (
            <Button
              variant="destructive"
              onClick={() => setShowDeleteDialog(true)}
            >
              Delete ({selectedRows.length})
            </Button>
          )}
        </div>
      </div>

      {/* جدول سطح المكتب */}
      <Table className="hidden md:table">
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="w-10 text-muted-foreground">
              <Checkbox
                checked={
                  selectedRows.length === filteredData.length &&
                  filteredData.length > 0
                }
                onCheckedChange={toggleSelectAll}
                aria-label="Select all rows"
              />
            </TableHead>

            {type === "rooms" ? (
              <>
                <TableHead className="text-muted-foreground">Room Name</TableHead>
                <TableHead className="text-muted-foreground">Bed Type</TableHead>
                <TableHead className="text-muted-foreground">Floor</TableHead>
                <TableHead className="text-muted-foreground">Facilities</TableHead>
                <TableHead className="text-muted-foreground">Rate</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
              </>
            ) : (
              <>
                <TableHead className="text-muted-foreground">Guest Name</TableHead>
                <TableHead className="text-muted-foreground">Room</TableHead>
                <TableHead className="text-muted-foreground">Check In</TableHead>
                <TableHead className="text-muted-foreground">Check Out</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id} className="border-border">
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onCheckedChange={() => toggleRow(row.id)}
                  aria-label={`Select row ${
                    type === "rooms" ? row.roomName : row.guestName
                  }`}
                />
              </TableCell>

              {type === "rooms" ? (
                <>
                  <TableCell className="font-medium text-foreground">
                    {row.roomName}
                  </TableCell>
                  <TableCell className="text-foreground">{row.bedType}</TableCell>
                  <TableCell className="text-foreground">{row.floor}</TableCell>
                  <TableCell className="truncate max-w-xs text-foreground">
                    {row.facilities}
                  </TableCell>
                  <TableCell className="text-foreground">{row.rate}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleStatus(row.id)}
                      className={
                        row.status === "Available"
                          ? "border-green-500/40 text-green-600 hover:bg-green-500/10"
                          : "border-red-500/40 text-red-600 hover:bg-red-500/10"
                      }
                      aria-label={`Toggle status for ${row.roomName}`}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className="text-foreground">{row.guestName}</TableCell>
                  <TableCell className="text-foreground">{row.room}</TableCell>
                  <TableCell className="text-foreground">{row.checkIn}</TableCell>
                  <TableCell className="text-foreground">{row.checkOut}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleStatus(row.id)}
                      className={
                        row.status === "Available"
                          ? "border-green-500/40 text-green-600 hover:bg-green-500/10"
                          : "border-red-500/40 text-red-600 hover:bg-red-500/10"
                      }
                      aria-label={`Toggle status for ${row.guestName}`}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* عرض الموبايل */}
      <div className="md:hidden space-y-4">
        {filteredData.map((row) => (
          <div
            key={row.id}
            className="border border-border rounded-lg p-4 space-y-2 shadow-sm bg-card text-card-foreground"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-foreground">
                {type === "rooms" ? row.roomName : row.guestName}
              </h3>
              <Checkbox
                checked={selectedRows.includes(row.id)}
                onCheckedChange={() => toggleRow(row.id)}
                aria-label={`Select row ${
                  type === "rooms" ? row.roomName : row.guestName
                }`}
              />
            </div>

            {type === "rooms" ? (
              <>
                <div className="text-sm text-muted-foreground">
                  Bed: {row.bedType}
                </div>
                <div className="text-sm text-foreground">Floor: {row.floor}</div>
                <div className="text-sm truncate text-foreground">
                  Facilities: {row.facilities}
                </div>
                <div className="text-sm text-foreground">Rate: {row.rate}</div>
              </>
            ) : (
              <>
                <div className="text-foreground">Room: {row.room}</div>
                <div className="text-foreground">Check In: {row.checkIn}</div>
                <div className="text-foreground">Check Out: {row.checkOut}</div>
              </>
            )}

            <Button
              size="sm"
              variant="outline"
              onClick={() => toggleStatus(row.id)}
              className={
                row.status === "Available"
                  ? "border-green-500/40 text-green-600 hover:bg-green-500/10"
                  : "border-red-500/40 text-red-600 hover:bg-red-500/10"
              }
              aria-label={`Toggle status for ${
                type === "rooms" ? row.roomName : row.guestName
              }`}
            >
              {row.status}
            </Button>
          </div>
        ))}
      </div>

      {/* Delete Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className="bg-popover text-popover-foreground border-border">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete {type === "rooms" ? "rooms" : "bookings"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              Are you sure you want to delete the selected{" "}
              {type === "rooms" ? "rooms" : "bookings"}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-border">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Yes, delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Add Dialog (موجود فقط لغرف) */}
      {type === "rooms" && (
        <AlertDialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <AlertDialogContent className="bg-popover text-popover-foreground border-border">
            <AlertDialogHeader>
              <AlertDialogTitle>Add new room</AlertDialogTitle>
            </AlertDialogHeader>

            <div className="space-y-3 p-2">
              <Input
                placeholder="Room name"
                value={newRoom.roomName}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, roomName: e.target.value })
                }
                className="bg-background border-border text-foreground"
              />
              <Input
                placeholder="Bed type"
                value={newRoom.bedType}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, bedType: e.target.value })
                }
                className="bg-background border-border text-foreground"
              />
              <Input
                placeholder="Floor"
                value={newRoom.floor}
                onChange={(e) => setNewRoom({ ...newRoom, floor: e.target.value })}
                className="bg-background border-border text-foreground"
              />
              <Input
                placeholder="Facilities"
                value={newRoom.facilities}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, facilities: e.target.value })
                }
                className="bg-background border-border text-foreground"
              />
              <Input
                placeholder="Rate"
                value={newRoom.rate}
                onChange={(e) => setNewRoom({ ...newRoom, rate: e.target.value })}
                className="bg-background border-border text-foreground"
              />
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel className="border-border">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={addRoom}>
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
