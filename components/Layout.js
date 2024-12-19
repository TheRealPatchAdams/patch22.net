export default function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Left Sidebar */}
      <aside className="bg-green-400 p-4 text-white">
        Left Sidebar
      </aside>

      {/* Main Content */}
      <main className="bg-white p-6 col-span-1 md:col-span-2 shadow-lg rounded-lg">
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="bg-orange-400 p-4 text-white">
        Right Sidebar
      </aside>
    </div>
  );
}
