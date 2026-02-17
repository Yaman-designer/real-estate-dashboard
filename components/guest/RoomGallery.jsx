"use client";

import { useState } from "react";

export default function RoomGallery({ room }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < room.images.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider */}
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {room.images.map((image, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <img
              src={image}
              alt={`Room ${i}`}
              className="w-full h-56 sm:h-44 object-cover rounded-lg bg-card shadow-md border border-border"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex absolute top-1/2 right-1 gap-2 z-100 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className="
            bg-primary text-primary-foreground w-9 h-9 rounded-full
            flex items-center justify-center shadow-md
            disabled:opacity-0
          "
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          disabled={index === room.images.length - 1}
          className="
            bg-primary text-primary-foreground w-9 h-9 rounded-full
            flex items-center justify-center shadow-md
            disabled:opacity-0
          "
        >
          →
        </button>
      </div>
    </div>
  );
}
