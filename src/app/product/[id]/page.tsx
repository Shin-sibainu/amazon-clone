import React from "react";
import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-screen-2xl mx-auto p-4">
        <div className="bg-white p-6 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 商品画像 */}
            <div className="relative h-[500px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* 商品情報 */}
            <div>
              <h1 className="text-xl font-medium mb-4">{product.title}</h1>

              <div className="border-b pb-3">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating
                            ? "text-[#F4A41D]"
                            : "text-gray-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-amazon-link ml-2 hover:text-amazon-link-dark hover:cursor-pointer">
                    {product.reviewCount}件の評価
                  </span>
                </div>
              </div>

              <div className="my-4">
                <div className="flex items-baseline">
                  <span className="text-sm">￥</span>
                  <span className="text-2xl font-medium">
                    {product.price.toLocaleString()}
                  </span>
                </div>
                {product.point && (
                  <div className="text-sm text-gray-600">
                    {product.point}ポイント({product.point}%)
                  </div>
                )}
              </div>

              {product.isPrime && (
                <div className="flex items-center mb-4">
                  <Image
                    src="/prime-logo.png"
                    alt="Prime"
                    width={50}
                    height={25}
                    className="object-contain"
                  />
                  <span className="text-sm text-gray-500 ml-2">
                    翌日お届け可能
                  </span>
                </div>
              )}

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full mb-2">
                カートに入れる
              </button>
              <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 rounded-full">
                今すぐ買う
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
