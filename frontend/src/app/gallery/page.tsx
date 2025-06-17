import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Gallery() {
	// Gallery images data
	const galleryImages = [
		{
			id: 1,
			src: "/images/gallery-1.jpg",
			alt: "Grand Hall Setup",
			category: "Venues",
		},
		{
			id: 2,
			src: "/images/gallery-2.jpg",
			alt: "Corporate Conference",
			category: "Events",
		},
		{
			id: 3,
			src: "/images/gallery-3.jpg",
			alt: "Wedding Reception",
			category: "Weddings",
		},
		{
			id: 4,
			src: "/images/gallery-4.jpg",
			alt: "Dining Area",
			category: "Facilities",
		},
		{
			id: 5,
			src: "/images/grand-hall.jpg",
			alt: "Grand Hall Empty",
			category: "Venues",
		},
		{
			id: 6,
			src: "/images/meeting-rooms.jpg",
			alt: "Meeting Room",
			category: "Facilities",
		},
		{
			id: 7,
			src: "/images/dining-area.jpg",
			alt: "Dining Setup",
			category: "Facilities",
		},
		{
			id: 8,
			src: "/images/interior.jpg",
			alt: "Interior Architecture",
			category: "Venues",
		},
		{
			id: 9,
			src: "/images/convention-center.jpg",
			alt: "Convention Center Exterior",
			category: "Venues",
		},
	];

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
			<Navbar />

			{/* Enhanced Gallery Hero */}
			<section className="relative section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 mt-16 overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
				<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
				<div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl -z-10 animate-pulse animation-delay-1000"></div>

				<div className="container mx-auto container-padding text-center">
					<div className="inline-flex items-center bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 px-6 py-3 rounded-full mb-8 animate-fade-in-up border border-teal-200">
						<svg
							className="w-5 h-5 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="font-semibold tracking-wide uppercase">
							Our Spaces
						</span>
					</div>
					<h1 className="heading-primary text-white mb-8 animate-fade-in-up animation-delay-200">
						Visual <span className="text-gradient">Gallery</span>
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8 animate-scale-in animation-delay-400 rounded-full"></div>
					<p className="text-body-large text-slate-300 max-w-4xl mx-auto animate-fade-in-up animation-delay-500">
						Explore our stunning spaces and get inspired for your next event at
						Mims Convention Centre. Every corner tells a story of elegance and
						sophistication.
					</p>
				</div>
			</section>

			{/* Enhanced Gallery Filter */}
			<section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>

				<div className="container mx-auto container-padding">
					<div className="flex flex-wrap justify-center gap-4 mb-16">
						<button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold shadow-soft hover:shadow-teal transition-all duration-300 hover:scale-105 transform">
							All
						</button>
						<button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 text-slate-300 hover:text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 transform border border-slate-700 hover:border-transparent">
							Venues
						</button>
						<button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 text-slate-300 hover:text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 transform border border-slate-700 hover:border-transparent">
							Events
						</button>
						<button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 text-slate-300 hover:text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 transform border border-slate-700 hover:border-transparent">
							Weddings
						</button>
						<button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 text-slate-300 hover:text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 transform border border-slate-700 hover:border-transparent">
							Facilities
						</button>
					</div>

					{/* Enhanced Gallery Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
						{galleryImages.map((image, index) => (
							<div
								key={image.id}
								className="group relative overflow-hidden rounded-3xl shadow-strong hover:shadow-3xl transition-all duration-500 hover:scale-105 transform border border-white/10 hover:border-teal-500/50"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="relative h-80 lg:h-96">
									<Image
										src={image.src}
										alt={image.alt}
										fill
										style={{ objectFit: "cover" }}
										className="transition-transform duration-700 group-hover:scale-110"
									/>
									{/* Gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
								</div>

								{/* Content overlay */}
								<div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
									<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
										<h3 className="text-white font-bold text-xl mb-2">
											{image.alt}
										</h3>
										<div className="flex items-center justify-between">
											<span className="text-teal-300 font-medium">
												{image.category}
											</span>
											<div className="bg-teal-500 p-2 rounded-full">
												<svg
													className="w-4 h-4 text-white"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
													/>
												</svg>
											</div>
										</div>
									</div>
								</div>

								{/* Category badge */}
								<div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
									{image.category}
								</div>
							</div>
						))}
					</div>

					{/* Enhanced Load More Button */}
					<div className="text-center mt-16">
						<button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 transform shadow-soft hover:shadow-teal group">
							<span>Load More Images</span>
							<svg
								className="w-5 h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform duration-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 14l-7 7m0 0l-7-7m7 7V3"
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>

			{/* Enhanced Call to Action */}
			<section className="section-padding bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"></div>

				<div className="container mx-auto container-padding text-center">
					<div className="modern-card-dark p-12 lg:p-16 rounded-3xl shadow-strong hover:shadow-3xl transition-all duration-500 border border-white/10 hover:border-teal-500/30 max-w-4xl mx-auto">
						<div className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-full mb-8">
							<svg
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="font-semibold">Ready to Get Started?</span>
						</div>

						<h2 className="heading-secondary text-white mb-6">
							Ready to Book Your <span className="text-gradient">Event?</span>
						</h2>
						<p className="text-body-large text-slate-300 max-w-3xl mx-auto mb-10">
							Contact our team today to schedule a tour or discuss your event
							requirements. Let&apos;s make your vision a reality.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/#contact"
								className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 transform shadow-soft hover:shadow-teal inline-flex items-center justify-center group"
							>
								<span>Contact Us</span>
								<svg
									className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</Link>
							<a
								href="tel:+919544311236"
								className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 transform border border-white/20 hover:border-white/40 inline-flex items-center justify-center group"
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span>Call Now</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Mims Convention Centre</h3>
							<p className="text-gray-400 mb-4">
								Where extraordinary events come to life.
							</p>
							<div className="flex space-x-4">
								<a href="#" className="text-gray-400 hover:text-white">
									<span className="sr-only">Facebook</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										></path>
									</svg>
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
									<span className="sr-only">Instagram</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"
										></path>
									</svg>
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
									<span className="sr-only">Twitter</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
									</svg>
								</a>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
							<ul className="space-y-2">
								<li>
									<Link href="/" className="text-gray-400 hover:text-white">
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/#about"
										className="text-gray-400 hover:text-white"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/#facilities"
										className="text-gray-400 hover:text-white"
									>
										Facilities
									</Link>
								</li>
								<li>
									<Link
										href="/gallery"
										className="text-gray-400 hover:text-white"
									>
										Gallery
									</Link>
								</li>
								<li>
									<Link
										href="/#contact"
										className="text-gray-400 hover:text-white"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-4">Services</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="text-gray-400 hover:text-white">
										Corporate Events
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white">
										Weddings
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white">
										Conferences
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white">
										Trade Shows
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white">
										Social Gatherings
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-4">Newsletter</h3>
							<p className="text-gray-400 mb-4">
								Subscribe to our newsletter for updates and special offers.
							</p>
							<form className="flex">
								<input
									type="email"
									placeholder="Your email"
									className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
								/>
								<button
									type="submit"
									className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-4 py-2 rounded-r-md transition-all duration-300"
								>
									Subscribe
								</button>
							</form>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
						<p>
							&copy; {new Date().getFullYear()} Mims Convention Centre. All
							rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
