import Image from "next/image";
import { InteractiveLogo } from "@/components/interactive-logo";
import { InteractivePhone } from "@/components/interactive-phone";
import FeatureSection from "@/components/feature-section";

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
					<nav className="hidden md:flex gap-8 text-sm text-gray-600">
						<a href="#features" className="hover:text-gray-900 transition">Features</a>
						<a href="#showcase" className="hover:text-gray-900 transition">Gallery</a>
						<a href="#impact" className="hover:text-gray-900 transition">Impact</a>
					</nav>
					<button className="bg-green-600 px-5 py-2 rounded-full text-white text-sm font-medium hover:bg-green-700 transition">
						Get Started
					</button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative overflow-hidden">

				<div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-32">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<div className="flex justify-start mb-8">
								<InteractiveLogo />
							</div>
							<h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
								Manage your money with <span className="text-green-600">clarity</span>
							</h1>
							<p className="text-lg text-gray-600 mb-8 leading-relaxed">
								Track expenses, visualize spending patterns, and achieve your financial goals with an app that makes money management beautifully simple.
							</p>
							<div className="flex gap-4">
								<button className="bg-green-600 px-8 py-3 rounded-lg text-white font-medium hover:bg-green-700 transition">
									Start Free
								</button>
								<button className="border border-gray-300 px-8 py-3 rounded-lg text-gray-900 font-medium hover:border-gray-400 transition">
									Learn More
								</button>
							</div>
						</div>
						<div className="relative flex justify-center">
							<InteractivePhone />
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-green-50 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 sm:px-8">
					<div className="grid md:grid-cols-3 gap-12">
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">18k+</div>
							<p className="text-gray-600">Active Users Managing Their Money</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">$8.4M+</div>
							<p className="text-gray-600">Monthly Transactions Tracked</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">27%</div>
							<p className="text-gray-600">Average Savings Improvement</p>
						</div>
					</div>
				</div>
			</section>

			<FeatureSection />

			{/* Impact Section */}
			<section id="impact" className="py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 sm:px-8">
					<div className="text-center mb-16">
						<p className="text-green-600 font-semibold text-sm uppercase mb-2">Real Impact</p>
						<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Join Thousands Taking Control</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ title: "Start Tracking", desc: "Connect your accounts and begin tracking in seconds" },
							{ title: "Analyze Patterns", desc: "Discover where your money goes each month" },
							{ title: "Optimize Spending", desc: "Make smarter decisions and save more" },
						].map((step, i) => (
							<div key={i} className="relative bg-white border border-gray-200 rounded-2xl p-8">
								<div className="absolute -top-12 -left-12 w-24 h-24 bg-green-100 rounded-full opacity-50" />
								<div className="relative z-10">
									<div className="text-3xl font-bold text-green-600 mb-4">{i + 1}</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
									<p className="text-gray-600">{step.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 sm:py-32 bg-green-600">
				<div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to take control?</h2>
					<p className="text-xl text-green-50 mb-8">No credit card required. Start managing your finances today.</p>
					<button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition inline-block">
						Get Started for Free
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-gray-400 py-12">
				<div className="mx-auto max-w-7xl px-6 sm:px-8">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<img src="/logo.png" alt="Tarsi Logo" className="h-8 w-8" />
								<div className="text-white font-bold text-lg">Tarsi</div>
							</div>
							<p className="text-sm">Smart money management for everyone.</p>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Product</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#" className="hover:text-white transition">Features</a></li>
								<li><a href="#" className="hover:text-white transition">Pricing</a></li>
								<li><a href="#" className="hover:text-white transition">Security</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#" className="hover:text-white transition">About</a></li>
								<li><a href="#" className="hover:text-white transition">Blog</a></li>
								<li><a href="#" className="hover:text-white transition">Careers</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Legal</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#" className="hover:text-white transition">Privacy</a></li>
								<li><a href="#" className="hover:text-white transition">Terms</a></li>
								<li><a href="#" className="hover:text-white transition">Contact</a></li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-800 pt-8 text-center text-sm">
						<p>&copy; 2026 Tarsi. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
