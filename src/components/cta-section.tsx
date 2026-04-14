import { ArrowUpRight } from "@/components/icons";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden rounded-4xl border-2 border-green-300/60 bg-gradient-to-br from-white via-green-50 to-white p-12 shadow-2xl sm:p-14 lg:p-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold tracking-widest text-green-600 uppercase">
            Ready to get started?
          </p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Make every dollar easier to see, save, and grow.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            Join thousands using Tarsi to take control of their money with a product that feels premium from the first tap.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              Start Free Today
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <div className="inline-flex items-center justify-center rounded-full border-2 border-green-300 bg-white/50 px-8 py-4 text-base font-semibold text-green-700 hover:bg-white transition">
              🔒 No credit card required
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { icon: "⚡", title: "Instant setup", description: "Connect accounts in minutes and start tracking" },
            { icon: "📊", title: "Daily clarity", description: "Know exactly where your money stands" },
            { icon: "🎯", title: "Better habits", description: "Build consistency and reach your goals" },
            { icon: "🛡️", title: "Always secure", description: "Bank-grade security protects your data" },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border-2 border-green-200/60 bg-white/70 p-6 hover:shadow-lg transition hover:-translate-y-1"
            >
              <p className="text-3xl mb-3">{icon}</p>
              <p className="text-lg font-bold text-gray-900">{title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}