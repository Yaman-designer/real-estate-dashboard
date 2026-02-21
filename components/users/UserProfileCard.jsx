"use client";

import { Phone, Mail, UserCircle2, ShieldCheck } from "lucide-react";

export default function UserProfileCard({ user }) {
  return (
    <div className="bg-card text-card-foreground rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow w-full max-w-sm mx-auto lg:mx-0 mt-0 sm:mt-6 lg:mt-12 border border-border">
      {/* الخلفية */}
      <div className="relative h-28 sm:h-32">
        <img
          src={user.bgAvatar}
          alt="خلفية المستخدم"
          className="w-full h-full object-cover"
        />

        {/* الصورة الشخصية */}
        <img
          src={user.avatar}
          alt={user.name}
          className="absolute left-1/2 -translate-x-1/2 -bottom-12 sm:-bottom-14 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-card object-cover shadow-xl"
        />
      </div>

      {/* المحتوى */}
      <div className="pt-14 sm:pt-16 px-4 sm:px-6 pb-4 sm:pb-6">
        {/* معلومات أساسية */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-xs font-semibold tracking-wide mb-1 text-primary">
            {user.username.toUpperCase()}
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-1 text-foreground">
            {user.name}
          </h2>

          {/* النوع + الحالة */}
          <div className="flex justify-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground mt-1">
            <span className="flex items-center gap-1">
              <UserCircle2 className="w-4 h-4 text-primary" />
              {user.role}
            </span>

            <span className="text-border">•</span>

            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              {user.status}
            </span>
          </div>
        </div>

        {/* وسائل التواصل */}
        <div className="space-y-2">
          {/* الهاتف */}
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all hover:bg-muted cursor-pointer group border border-transparent hover:border-border">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10 transition-colors">
              <Phone
                className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform group-hover:scale-110"
                strokeWidth={2}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium flex-1 truncate text-foreground">
              {user.phone}
            </span>
          </div>

          {/* البريد */}
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all hover:bg-muted cursor-pointer group border border-transparent hover:border-border">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10 transition-colors">
              <Mail
                className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform group-hover:scale-110"
                strokeWidth={2}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium flex-1 truncate text-foreground">
              {user.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
