export function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex gap-2 mb-6">
      {categories.map((category) => (
        <span
          key={category}
          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
