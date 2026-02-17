import { Phone, Mail } from "lucide-react";

export default function GuestProfileCard({ guest }) {
  return (
    <div className="bg-card text-card-foreground rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow w-full max-w-sm mx-auto lg:mx-0 mt-0 sm:mt-6 lg:mt-12 border border-border">
      
      {/* Header with Background */}
      <div className="relative h-28 sm:h-32">
        <img
          src={guest.bgAvatar}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Avatar */}
        <img
          src={guest.avatar}
          alt={guest.name}
          className="absolute left-1/2 -translate-x-1/2 -bottom-12 sm:-bottom-14 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-card object-cover shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="pt-14 sm:pt-16 px-4 sm:px-6 pb-4 sm:pb-6">

        {/* User Info */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-xs font-semibold tracking-wide mb-1 text-primary">
            {guest.profileName.toUpperCase()}
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-1 text-foreground">
            {guest.name}
          </h2>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">

          {/* Phone */}
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all hover:bg-muted cursor-pointer group border border-transparent hover:border-border">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10 transition-colors">
              <Phone
                className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform group-hover:scale-110"
                strokeWidth={2}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium flex-1 truncate text-foreground">
              {guest.phone}
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all hover:bg-muted cursor-pointer group border border-transparent hover:border-border">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10 transition-colors">
              <Mail
                className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform group-hover:scale-110"
                strokeWidth={2}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium flex-1 truncate text-foreground">
              {guest.email}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
