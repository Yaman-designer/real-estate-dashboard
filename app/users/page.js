import UserProfileCard from "@/components/users/UserProfileCard";
import UserOverviewCard from "@/components/users/UserOverviewCard";

export default function UsersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 text-foreground">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* ملف المستخدم */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <UserProfileCard
            user={{
              username: "ahmed_agent",
              name: "Ahmed Ali",
              email: "ahmed.agent@example.com",
              phone: "+90 555 123 4567",
              role: "Agent",          // نوع المستخدم: مالك / وكيل / عميل
              status: "Active",       // نشط / موقوف
              avatar: "https://randomuser.me/api/portraits/men/75.jpg",
              bgAvatar:
                "https://images.unsplash.com/photo-1503264116251-35a269479413",
            }}
          />
        </div>

        {/* نشاط المستخدم داخل نظام العقارات */}
        <div className="w-full lg:flex-1">
          <UserOverviewCard
            stats={{
              totalProperties: 18,     // عدد العقارات المرتبطة به
              activeProperties: 12,    // عقارات نشطة
              pendingProperties: 4,    // بانتظار الموافقة
              rejectedProperties: 2,   // مرفوضة
              totalRequests: 9,        // طلبات / رسائل أرسلها
              lastLogin: "2026-02-20 14:30",
            }}
          />
        </div>
      </div>
    </div>
  );
}
