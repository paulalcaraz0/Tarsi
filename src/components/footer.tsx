export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 border-t-2 border-green-200/60 pt-10 text-base text-gray-700 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-gray-900">© 2026 Tarsi. All rights reserved.</p>
          <p className="text-sm text-gray-600 mt-2">Making money management beautiful and accessible.</p>
        </div>
        <div className="flex gap-8 text-sm font-semibold">
          <a href="#features" className="text-gray-700 hover:text-green-600 transition">
            Features
          </a>
          <a href="#showcase" className="text-gray-700 hover:text-green-600 transition">
            Showcase
          </a>
          <a href="#cta" className="text-gray-700 hover:text-green-600 transition">
            Get Started
          </a>
        </div>
      </div>
    </footer>
  );
}