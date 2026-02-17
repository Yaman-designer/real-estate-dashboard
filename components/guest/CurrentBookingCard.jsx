import RoomGallery from "@/components/guest/RoomGallery";
import { Key, UserRound, BedDouble, CalendarDays } from "lucide-react";
import RoomFacilities from "./RoomFacilities";

export default function CurrentBookingCard({ booking }) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-card text-card-foreground rounded-lg shadow-md w-full mt-6 sm:mt-8 lg:mt-12 border border-border">
      <h2 className="text-sm sm:text-base font-bold mb-4 text-foreground">
        Current Booking
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 mb-6">
        {/* Icon & Room Name */}
        <div className="flex items-start gap-4 lg:col-span-5">
          {/* Icon */}
          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
            <Key className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" strokeWidth={3} />
          </div>

          {/* Room Name */}
          <div className="flex flex-col justify-center flex-1">
            <p className="text-xs font-semibold tracking-wide mb-1 text-primary">
              Booking ID: {booking.id}
            </p>

            <h2 className="text-base sm:text-lg font-bold text-foreground">
              {booking.room.name}
            </h2>
          </div>
        </div>

        {/* Room Details */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:col-span-7">
          <DetailItem
            icon={UserRound}
            label="Room Capacity"
            value={`${booking.room.personLength} Person`}
          />

          <DetailItem icon={BedDouble} label="Bed Type" value={booking.room.bedType} />

          <DetailItem
            icon={CalendarDays}
            label="Booking Date"
            value={booking.room.bookingDate}
            className="col-span-2 sm:col-span-1"
          />
        </div>
      </div>

      <RoomFacilities facilities={"AC,shower,DoubleBed,Towel,CoffeSet,TV,Wifi,Led"} />

      <RoomGallery
        room={{
          images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
          ],
        }}
      />
    </div>
  );
}

function DetailItem({ icon: Icon, label, value, className = "" }) {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <div className="flex items-center gap-2 mb-1 sm:mb-2">
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
        <p className="text-muted-foreground font-medium text-[10px] sm:text-xs leading-tight">
          {label}
        </p>
      </div>

      <p className="font-bold text-xs sm:text-sm text-foreground">{value}</p>
    </div>
  );
}
