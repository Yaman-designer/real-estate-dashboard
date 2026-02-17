import GuestProfileCard from "@/components/guest/GuestProfileCard";
import CurrentBookingCard from "@/components/guest/CurrentBookingCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 text-foreground">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <GuestProfileCard
            guest={{
              profileName: "johndoe",
              name: "John Doe",
              email: "test@gmail.com",
              phone: "+1234567890",
              avatar: "https://randomuser.me/api/portraits/men/75.jpg",
              bgAvatar:
                "https://images.unsplash.com/photo-1503264116251-35a269479413",
            }}
          />
        </div>

        <div className="w-full lg:flex-1">
          <CurrentBookingCard
            booking={{
              id: "BK123456",
              room: {
                name: "Queen Room Deluxe Suite",
                personLength: "2-3",
                bookingDate: "oct 20th - 24th, 2026",
                bedType: "Double",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
