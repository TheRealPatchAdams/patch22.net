import { supabase } from "../../../utils/supabase";
import ProductDetails from "../../../components/ProductDetails"; // Client Component

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  // Fetch product details based on ID
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    console.error("Error fetching product:", error);
    return (
      <div className="container mx-auto py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
        <p className="text-gray-500 mb-6">
          The product you are looking for does not exist or may have been removed.
        </p>
        <a
          href="/products"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Return to Products
        </a>
      </div>
    );
  }

  return <ProductDetails product={product} />; // Pass product to Client Component
}
