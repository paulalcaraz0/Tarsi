import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tarsi | Take Control of Your Finances",
	description:
		"Tarsi is a premium finance tracking app for expenses, goals, insights, subscriptions, and AI-powered money management.",
	metadataBase: new URL("https://tarsi.app"),
	icons: {
		icon: "/logo.png",
		shortcut: "/logo.png",
		apple: "/logo.png",
	},
	openGraph: {
		title: "Tarsi | Take Control of Your Finances",
		description:
			"Track spending, manage goals, and get smart insights with a modern finance companion.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
			<body
				className={`${manrope.variable} ${jetBrainsMono.variable} bg-[#07140f] text-white antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
