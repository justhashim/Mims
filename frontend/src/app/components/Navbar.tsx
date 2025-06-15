"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isGalleryPage, setIsGalleryPage] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		// Check if we're on the gallery page
		setIsGalleryPage(window.location.pathname.includes("/gallery"));

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-all duration-300 ${
				scrolled || isGalleryPage ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center flex-1 max-w-[80%]"
					>
						<div className="relative h-14 w-14 mr-2">
							<Image
								src="/images/logo.png"
								alt="Mims Convention Centre Logo"
								fill
								style={{ objectFit: "contain" }}
								priority
							/>
						</div>
						<span className="hidden md:block text-2xl font-semibold text-gray-900 font-heading tracking-normal">
							Mims Convention Centre
						</span>
						<span className="md:hidden text-lg font-medium text-gray-900 leading-tight font-heading">
							Mims Convention Centre
						</span>
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

						<a 
							href="tel:+919544311236" 
							className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors shadow-sm text-sm flex items-center gap-2"
						>
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								className="h-4 w-4" 
								fill="none" 
								viewBox="0 0 24 24" 
								stroke="currentColor"
							>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" 
								/>
							</svg>
							Call Us Now
						</a>
					</div>

					<div className="md:hidden">
						<button
							onClick={toggleMobileMenu}
							className="flex items-center p-2 text-gray-900 rounded-full hover:bg-gray-100"
							aria-label="Toggle mobile menu"
						>
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

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 transition-all duration-300 ease-in-out">
						<div className="flex flex-col space-y-4">
							<Link
								href="/"
								className="px-2 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
								onClick={() => setMobileMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/#about"
								className="px-2 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
								onClick={() => setMobileMenuOpen(false)}
							>
								About
							</Link>
							<Link
								href="/#facilities"
								className="px-2 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
								onClick={() => setMobileMenuOpen(false)}
							>
								Facilities
							</Link>
							<Link
								href="/gallery"
								className="px-2 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
								onClick={() => setMobileMenuOpen(false)}
							>
								Gallery
							</Link>
							<div className="border-t border-gray-200 my-2"></div>
							<a
								href="tel:+919544311236"
								className="mt-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors shadow-sm text-sm text-center flex items-center justify-center gap-2"
								onClick={() => setMobileMenuOpen(false)}
							>
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									className="h-4 w-4" 
									fill="none" 
									viewBox="0 0 24 24" 
									stroke="currentColor"
								>
									<path 
										strokeLinecap="round" 
										strokeLinejoin="round" 
										strokeWidth={2} 
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" 
									/>
								</svg>
								Call Us Now
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
