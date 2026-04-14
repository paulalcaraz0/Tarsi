import { ShieldCheck, Sparkline, Users } from "@/components/icons";

type WhyTarsiProps = {
  points: Array<{
    title: string;
    description: string;
  }>;
};

const iconMap = [Sparkline, Users, ShieldCheck] as const;

export function WhyTarsi({ points }: WhyTarsiProps) {
  return (
    <section className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <div className="max-w-xl">
        <p className="text-sm font-bold tracking-widest text-green-600 uppercase">
          Why Tarsi
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          The right balance of simplicity, speed, and soul.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 sm:text-xl">
          Tarsi is built to help people build habits, make decisions faster, and feel more in control of money every day.
        </p>
      </div>

      <div className="space-y-4">
        {points.map((point, index) => {
          const Icon = iconMap[index] ?? Sparkline;

          return (
            <article
              key={point.title}
              className="group relative overflow-hidden rounded-3xl border-2 border-green-200/60 bg-white/70 p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-300/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition" />
              
              <div className="relative flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg flex-shrink-0">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{point.title}</h3>
                  <p className="mt-3 text-base leading-7 text-gray-700">{point.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}