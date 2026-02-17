"use client";

import MiniChart from "./MiniChart";
import { useEffect, useState } from "react";

export default function StatsCards() {
  const [stats, setStats] = useState({
    totalRooms: 0,
    availableRooms: 0,
    bookingsToday: 0,
    occupiedRooms: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="pt-9 text-muted-foreground">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-9">
      <Card
        title="Total Rooms"
        value={stats.totalRooms}
        max={stats.totalRooms}
        color="#6366f1"
        border="border-l-indigo-500"
      />

      <Card
        title="Available Rooms"
        value={stats.availableRooms}
        max={stats.totalRooms}
        color="#0ea5e9"
        border="border-l-sky-500"
      />

      <Card
        title="Bookings Today"
        value={stats.bookingsToday}
        max={stats.totalRooms}
        color="#ec4899"
        border="border-l-pink-500"
      />

      <Card
        title="Occupied Rooms"
        value={stats.occupiedRooms}
        max={stats.totalRooms}
        color="#10b981"
        border="border-l-emerald-500"
      />
    </div>
  );
}

function Card({ title, value, max, color, border }) {
  return (
    <div
      className={`bg-card text-card-foreground shadow-md rounded-lg p-4 border border-border border-l-4 flex items-center justify-between ${border}`}
    >
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <h2 className="text-xl font-bold text-foreground">{value}</h2>
      </div>

      <MiniChart value={value} max={max} color={color} />
    </div>
  );
}
