import { Suspense } from "react";
import { getProducts } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import BannerCarousel from "@/components/banner/BannerCarousel";

// 商品一覧を取得するコンポーネント
async function Products() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mt-20 relative z-30">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
          image={`/images/products/${product.id}.jpg`} // 画像パスは適宜調整してください
          rating={4.5} // 仮の値
          reviewCount={100} // 仮の値
          isPrime={true} // 仮の値
          point={Math.floor(product.price * 0.01)} // 価格の1%をポイントとして計算
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-10 p-5">
          <BannerCarousel />

          {/* 商品グリッドエリア - ストリーミングで読み込み */}
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mt-20 relative z-30">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow animate-pulse"
                  >
                    <div className="w-full h-64 bg-gray-200 rounded-lg mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                ))}
              </div>
            }
          >
            <Products />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
