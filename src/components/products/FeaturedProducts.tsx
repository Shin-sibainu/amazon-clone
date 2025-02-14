import { Product } from "@/lib/data";

export function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-bold mb-4">おすすめ商品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border bg-white rounded-lg p-4 shadow"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">
              ¥{product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
