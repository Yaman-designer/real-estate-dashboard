import DataTable from "@/components/layout/DataTable";

const data = [
  {
    id: 1,
    propertyName: "شقة فاخرة مطلة على البحر",
    city: "إسطنبول",
    type: "شقة",
    price: "250,000$",
    owner: "أحمد علي",
    status: "نشط",
  },
  {
    id: 2,
    propertyName: "فيلا حديثة مع مسبح",
    city: "أنطاليا",
    type: "فيلا",
    price: "480,000$",
    owner: "منى سليمان",
    status: "معلق",
  },
  {
    id: 3,
    propertyName: "محل تجاري في مركز المدينة",
    city: "قونيا",
    type: "محل تجاري",
    price: "90,000$",
    owner: "سعيد عمر",
    status: "مرفوض",
  },
];

export default function Page() {
  return (
    <div className="p-6">
      <DataTable data={data} />
    </div>
  );
}