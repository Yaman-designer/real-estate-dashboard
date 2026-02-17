export default function RoomFacilities({ facilities }) {
  return (
    <div className="py-4 w-full flex justify-between items-center gap-3 flex-wrap mt-4">
      <div className="text-sm sm:text-base font-bold mb-2 text-foreground">
        Room Facilities:
      </div>

      <div className="font-medium text-[12px] sm:text-sm leading-none mb-2 text-muted-foreground">
        {facilities}
      </div>
    </div>
  );
}
