import DataTable  from "@/components/layout/DataTable"
const bookingsData= [
    {
      id: 1,
      guestName: "Ahmad Ali",
      room: "Room 101",
      checkIn: "2026-02-10",
      checkOut: "2026-02-12",
      status: "Booked",
    },
    {
      id: 2,
      guestName: "Sara Omar",
      room: "Room 203",
      checkIn: "2026-02-11",
      checkOut: "2026-02-14",
      status: "Available",
    },
    {
      id: 3,
      guestName: "Mohammad Saleh",
      room: "Room 305",
      checkIn: "2026-02-15",
      checkOut: "2026-02-18",
      status: "Booked",
    },
  ];


export default function BookingsPage() {
   return (
     <div className="p-6">
       
       <DataTable  data={bookingsData} type="bookings"/>
     </div>
   )
}
