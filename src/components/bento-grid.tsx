import type { Feature } from "@/components/content";

type BentoGridProps = {
  features: Feature[];
};

export function BentoGrid({ features }: BentoGridProps) {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-6 xl:grid-cols-12">
      {features.map((feature) => {
        const Icon = feature.icon;
        const colors = [
          "from-blue-500 to-blue-600",
          "from-red-500 to-red-600",
          "from-green-500 to-emerald-600",
          "from-orange-500 to-orange-600",
          "from-purple-500 to-purple-600",
          "from-cyan-500 to-cyan-600",
          "from-pink-500 to-pink-600"
        ];
        const randomColor = colors[features.indexOf(feature) % colors.length];

        return (
          <article
            key={feature.title}
            className={`group relative overflow-hidden rounded-3xl border-2 border-green-200/60 bg-white/70 p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-green-300 ${feature.className}`}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-300/20 to-transparent rounded-full blur-2xl" />
            
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${randomColor} text-white shadow-lg`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-green-600 uppercase">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base leading-7 text-gray-700 font-medium">
                {feature.description}
              </p>

              <div className="relative mt-8 flex flex-1 items-center justify-center rounded-2xl border-2 border-green-200/50 bg-gradient-to-br from-green-50/80 to-white/50 p-4 min-h-24">
                <p className="text-sm text-green-600/60 font-semibold text-center">{feature.eyebrow} in action</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}