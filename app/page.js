export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
            Welcome to Patch22 Store
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Discover a world of amazing products and seamless shopping experiences. From innovative tools to high-quality essentials, Patch22 has you covered.
          </p>
          <a
            href="/products"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Explore Products
          </a>
        </div>
        {/* Background Accent */}
        <div className="absolute inset-0 bg-opacity-10 bg-gradient-to-br from-blue-300 to-blue-500 z-0"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12"> CHOOSE PATCH22</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">High Quality</h3>
              <p className="text-gray-600">
                We offer only the best products for our customers, guaranteed to meet your needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Fast Shipping</h3>
              <p className="text-gray-600">
                Enjoy quick and reliable delivery for all your purchases.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Secure Payments</h3>
              <p className="text-gray-600">
                Your transactions are safe with us, powered by Stripe and PayPal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
      </footer>
    </div>
  );
}
