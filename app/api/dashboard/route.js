import { NextResponse } from "next/server"

export async function GET() {
  
  return NextResponse.json({
    totalRooms: 320,
    availableRooms: 140,
    bookingsToday: 32,
    occupiedRooms: 320,
  })
}
