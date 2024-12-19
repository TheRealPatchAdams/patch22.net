import ProductCard from "../../components/ProductCard";

const products = [
  { id: 1, name: "Patch 1", price: 15.0, image: "/images/patch1.png" },
  { id: 2, name: "Patch 2", price: 10.49, image: "/images/patch2.png" },
  { id: 3, name: "Patch 3", price: 11.99, image: "/images/patch3.png" },
  { id: 4, name: "Patch 4", price: 12.99, image: "/images/patch4.png" },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
