import DataTable  from "@/components/layout/DataTable"


const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560448072-015ec7b0f0bb?auto=format&fit=crop&w=80&q=80",
    roomNumber: "#000123456",
    roomName: "Deluxe A-91234",
    bedType: "Double Bed",
    floor: "Floor A-1",
    facilities: "AC, Shower, Double Bed, Towel, Bathtub, Coffee Set, LED TV, Wifi",
    rate: "$145 /night",
    status: "Available",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501183638714-8d5e0c1b43f6?auto=format&fit=crop&w=80&q=80",
    roomNumber: "#000123457",
    roomName: "Deluxe B-91235",
    bedType: "Double Bed",
    floor: "Floor B-1",
    facilities: "AC, Shower, Double Bed, Towel, Bathtub, Coffee Set, LED TV, Wifi",
    rate: "$145 /night",
    status: "Booked",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=80&q=80",
    roomNumber: "#000123458",
    roomName: "Deluxe C-91236",
    bedType: "Double Bed",
    floor: "Floor C-1",
    facilities: "AC, Shower, Double Bed, Towel, Bathtub, Coffee Set, LED TV, Wifi",
    rate: "$145 /night",
    status: "Available",
  },
]

export default function Page() {
  return (
    <div className="p-6">
      
      <DataTable  data={data}/>
    </div>
  )
}
