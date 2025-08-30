export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">QuickSalePro.ai</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>Features</li>
            <li>Pricing</li>
            <li>Login</li>
            <li className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer">
              Get Started
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-4xl font-extrabold mb-4">Create AI-Powered Ads in Minutes 🚀</h2>
        <p className="max-w-2xl mb-6 text-lg">
          Generate high-converting ad copy and images for Facebook, Instagram, TikTok, and Google Ads.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold shadow">
            Get Started Free
          </button>
          <button className="border border-white px-6 py-3 rounded font-semibold">
            See Demo
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Why QuickSalePro.ai?</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow p-6 rounded">✅ AI-Generated Copy</div>
          <div className="bg-white shadow p-6 rounded">✅ AI-Generated Images</div>
          <div className="bg-white shadow p-6 rounded">✅ Campaign Dashboard</div>
          <div className="bg-white shadow p-6 rounded">✅ Stripe Billing Integration</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div>1️⃣ Sign up</div>
          <div>2️⃣ Create Campaign with AI</div>
          <div>3️⃣ Launch on Facebook/Google/TikTok</div>
          <div>4️⃣ Track ROI in Dashboard</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Pricing Plans</h3>
        <p className="mb-6">Starter | Pro | Agency</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold">
          See Pricing
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-200 text-center p-6 mt-auto">
        © 2025 QuickSalePro.ai | Terms | Privacy | Contact
      </footer>
    </div>
  );
}
