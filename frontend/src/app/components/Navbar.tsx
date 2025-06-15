"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-all duration-300 ${
				scrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="text-2xl font-bold text-gray-900 flex items-center"
					>
						<span className="bg-gray-900 h-8 w-2 rounded-full mr-2"></span>
						Mims Convention Centre
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="px-2 py-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							Home
						</Link>
						<Link
							href="/#about"
							className="px-2 py-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							About
						</Link>
						<Link
							href="/#facilities"
							className="px-2 py-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							Facilities
						</Link>
						<Link
							href="/gallery"
							className="px-2 py-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							Gallery
						</Link>

						<div className="border-l border-gray-300 h-6 mx-2"></div>

						<a href="tel:+1234567890" className="text-gray-900 font-medium">
							(123) 456-7890
						</a>

						<Link
							href="/#contact"
							className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors shadow-sm text-sm"
						>
							Contact
						</Link>
					</div>

					<div className="md:hidden">
						<button className="flex items-center p-2 text-gray-900 rounded-full hover:bg-gray-100">
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
			</div>
		</nav>
	);
};

export default Navbar;
