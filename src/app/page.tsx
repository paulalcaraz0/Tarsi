import HeroSection from "../components/hero-section";
import ImpactSection from "../components/impact-section";
import FeatureSection from "../components/feature-section";
import TestimonialSection from "../components/testimonial-section";

export default function Home() {
	return (
		<main className="relative bg-white">
			{/* Header */}
			<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
				<div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<img src="/logo.png" alt="Tarsi Logo" className="h-8 w-8" />
						<span className="text-2xl font-bold text-green-600">Tarsi</span>
					</div>
					<nav className="flex flex-wrap gap-4 text-sm text-gray-600">
						<a href="#home" className="relative pb-1 font-medium text-gray-500 transition-colors hover:text-[#2E8B57] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#2E8B57] after:transition-all hover:after:w-full">Home</a>
						<a href="#features" className="relative pb-1 font-medium text-gray-500 transition-colors hover:text-[#2E8B57] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#2E8B57] after:transition-all hover:after:w-full">Features</a>
						<a href="#impact" className="relative pb-1 font-medium text-gray-500 transition-colors hover:text-[#2E8B57] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#2E8B57] after:transition-all hover:after:w-full">Impact</a>
						<a href="#community" className="relative pb-1 font-medium text-gray-500 transition-colors hover:text-[#2E8B57] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#2E8B57] after:transition-all hover:after:w-full">Community</a>
					</nav>
				</div>
			</header>

			<HeroSection />

			<FeatureSection />

			<ImpactSection />

			<TestimonialSection />

			{/* Footer */}
			<footer className="bg-gray-900 text-gray-400 py-12">
				<div className="mx-auto max-w-7xl px-6 sm:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
						<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-self-start">
							<div className="flex items-center gap-2">
								<img src="/logo.png" alt="Tarsi Logo" className="h-8 w-8" />
								<div className="text-white font-bold text-lg">Tarsi</div>
							</div>
							<p className="text-sm">Smart money management for everyone.</p>
						</div>
						<p className="text-gray-500 text-sm md:justify-self-center text-center">&copy; 2026 Tarsi. All rights reserved.</p>
						<div className="flex flex-col gap-3 text-sm md:justify-self-end">
							<div className="flex flex-col gap-3">
								<div className="flex items-center gap-6">
									<h4 className="text-white font-semibold">Legal</h4>
									<a href="/privacy" className="hover:text-white transition">Privacy</a>
									<a href="/terms" className="hover:text-white transition">Terms</a>
								</div>
								<div className="flex items-center gap-4">
									<h4 className="text-white font-semibold">Contact</h4>
									<a
										href="https://www.facebook.com/tarsiapp"
										target="_blank"
										rel="noreferrer"
										className="hover:text-white transition"
									>
										Facebook
									</a>
									<a href="mailto:bryllim@gmail.com" className="hover:text-white transition">Gmail</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
}
