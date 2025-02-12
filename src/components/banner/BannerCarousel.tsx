"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const bannerImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=2000",
    alt: "MacBook Banner",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=2000",
    alt: "Headphones Banner",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=2000",
    alt: "Smart Watch Banner",
  },
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <div className="relative">
      <div className="absolute w-full h-20 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <div className="relative h-[370px] overflow-hidden">
        {bannerImages.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute w-full h-full transition-transform duration-500 ease-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-lg z-30 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-lg z-30 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default BannerCarousel;
