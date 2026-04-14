import Image from "next/image";

export function AppShowcase() {
  const screenshots = [
    { src: "/Screenshot 2026-04-13 215155.png", alt: "Home screen", title: "Dashboard" },
    { src: "/Screenshot 2026-04-13 215332.png", alt: "Accounts", title: "Accounts" },
    { src: "/Screenshot 2026-04-13 215410.png", alt: "Expense entry", title: "Add Expense" },
    { src: "/Screenshot 2026-04-13 215425.png", alt: "Screen 1", title: "Feature 1" },
    { src: "/Screenshot 2026-04-13 215437.png", alt: "Screen 2", title: "Feature 2" },
    { src: "/Screenshot 2026-04-13 215452.png", alt: "Screen 3", title: "Feature 3" },
  ];

  return (
    <section className="grid gap-12 rounded-4xl border-2 border-green-200/60 bg-gradient-to-br from-white/90 to-green-50/50 p-8 shadow-xl lg:grid-cols-[1fr_1.2fr] lg:p-12">
      <div>
        <p className="text-sm font-bold tracking-widest text-green-600 uppercase">
          Inside Tarsi
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          A finance app designed with heart and personality.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-8 text-gray-700">
          Every interaction is designed to feel smooth and intuitive. From logging expenses to checking your net worth, Tarsi makes managing money a joy, not a chore.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Quick expense entry with smart categorization",
            "See all accounts and net worth at a glance",
            "AI-powered insights and guidance",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border-1.5 border-green-200/50 bg-white/60 p-4 hover:bg-white transition"
            >
              <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex-shrink-0 shadow-md" />
              <p className="text-base leading-7 text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2 auto-rows-max">
        {screenshots.map((screenshot, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-2xl border-2 border-white bg-white shadow-lg hover:shadow-xl transition transform hover:scale-105 ${
              idx === 0 || idx === 1 ? "col-span-1 row-span-2" : "col-span-1"
            }`}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={200}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition">
              {screenshot.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}