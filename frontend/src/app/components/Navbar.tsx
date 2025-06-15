"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Get the height of the hero section (convention center background)
			const heroSection = document.querySelector("section");
			if (heroSection) {
				const heroHeight = heroSection.offsetHeight;
				setScrolled(window.scrollY > heroHeight - 80); // 80px before the end of hero section
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-green-700/90 backdrop-blur-sm shadow-md"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto flex flex-wrap items-center justify-between p-4">
				<Link href="/" className="text-2xl font-bold text-white">
					Mims Convention Centre
				</Link>

				<div className="hidden md:flex space-x-6">
					<Link
						href="/"
						className="text-white hover:text-green-200 transition-colors"
					>
						Home
					</Link>
					<Link
						href="/#about"
						className="text-white hover:text-green-200 transition-colors"
					>
						About
					</Link>
					<Link
						href="/#facilities"
						className="text-white hover:text-green-200 transition-colors"
					>
						Facilities
					</Link>
					<Link
						href="/gallery"
						className="text-white hover:text-green-200 transition-colors"
					>
						Gallery
					</Link>
					<Link
						href="/#contact"
						className="text-white hover:text-green-200 transition-colors"
					>
						Contact
					</Link>
				</div>

				<div className="md:hidden">
					<button className="flex items-center p-2 text-white">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
