import React from "react";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import BannerCarousel from "@/components/banner/BannerCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-10 p-5">
          <BannerCarousel />

          {/* 商品グリッドエリア */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mt-20 relative z-30">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                isPrime={product.isPrime}
                point={product.point}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
