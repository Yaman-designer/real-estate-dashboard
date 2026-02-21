"use client";

import {
  Building2,
  CheckCircle2,
  Timer,
  XCircle,
  CalendarClock,
} from "lucide-react";

export default function UserOverviewCard({ stats }) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-card text-card-foreground rounded-lg shadow-md w-full mt-6 sm:mt-8 lg:mt-12 border border-border">
      <h2 className="text-sm sm:text-base font-bold mb-4 text-foreground">
        نظرة عامة على المستخدم
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 mb-6">
        {/* الأيقونة + العنوان */}
        <div className="flex items-start gap-4 lg:col-span-5">
          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
            <Building2
              className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground"
              strokeWidth={3}
            />
          </div>

          <div className="flex flex-col justify-center flex-1">
            <p className="text-xs font-semibold tracking-wide mb-1 text-primary">
              رقم المستخدم: {stats.userId}
            </p>

            <h3 className="text-base sm:text-lg font-bold text-foreground">
              العقارات والنشاط داخل النظام
            </h3>
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:col-span-7">
          <DetailItem
            icon={Building2}
            label="إجمالي العقارات"
            value={stats.totalProperties}
          />

          <DetailItem
            icon={CheckCircle2}
            label="العقارات النشطة"
            value={stats.activeProperties}
          />

          <DetailItem
            icon={Timer}
            label="بانتظار الموافقة"
            value={stats.pendingProperties}
          />

          <DetailItem
            icon={XCircle}
            label="العقارات المرفوضة"
            value={stats.rejectedProperties}
          />

          <DetailItem
            icon={CalendarClock}
            label="آخر تسجيل دخول"
            value={stats.lastLogin}
            className="col-span-2 sm:col-span-3"
          />
        </div>
      </div>
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
