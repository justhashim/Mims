import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			{/* Hero Section with transparent background */}
			<section className="relative h-screen flex items-center justify-center">
				<div className="absolute inset-0 z-0">
					<div className="relative w-full h-full">
						{/* This would be replaced with your actual convention center image */}
						<div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70 z-10" />
						<Image
							src="/images/convention-center.jpg"
							alt="Mims Convention Centre"
							fill
							style={{ objectFit: "cover" }}
							priority
							className="opacity-40"
						/>
					</div>
				</div>

				<div className="container mx-auto px-4 z-10 text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
						Mims Convention Centre
					</h1>
					<p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
						Where Extraordinary Events Come to Life
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="#about"
							className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
						>
							Discover More
						</Link>
						<Link
							href="#contact"
							className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded-full text-lg font-medium transition-colors"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-green-700 mb-4">
							About Mims
						</h2>
						<div className="w-24 h-1 bg-green-700 mx-auto"></div>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold mb-4 text-gray-800">
								A Premier Destination for Events
							</h3>
							<p className="text-gray-600 mb-6">
								Mims Convention Centre is a state-of-the-art venue designed to
								host a wide range of events, from corporate conferences and
								trade shows to weddings and social gatherings. With our stunning
								architecture and versatile spaces, we provide the perfect
								backdrop for any occasion.
							</p>
							<p className="text-gray-600 mb-6">
								Located in the heart of the city, our convention centre combines
								accessibility with luxury, offering guests an unforgettable
								experience from the moment they arrive.
							</p>
							<div className="flex items-center space-x-4">
								<div className="bg-green-100 p-3 rounded-full">
									<svg
										className="w-6 h-6 text-green-700"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
								<span className="text-gray-700 font-medium">
									Established in 2025
								</span>
							</div>
						</div>

						<div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
							{/* This would be replaced with an actual image of the interior */}
							<Image
								src="/images/interior.jpg"
								alt="Mims Convention Centre Interior"
								fill
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Facilities Section */}
			<section id="facilities" className="py-20 bg-green-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-green-700 mb-4">
							Our Facilities
						</h2>
						<div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Discover our world-class facilities designed to accommodate events
							of any size and style.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Facility Card 1 */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="relative h-64">
								<Image
									src="/images/grand-hall.jpg"
									alt="Grand Hall"
									fill
									style={{ objectFit: "cover" }}
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-green-700 mb-2">
									Grand Hall
								</h3>
								<p className="text-gray-600 mb-4">
									Our flagship space can accommodate up to 1,500 guests with
									customizable layouts for any event type.
								</p>
								<ul className="text-gray-600 space-y-2">
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										State-of-the-art AV equipment
									</li>
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										Customizable lighting
									</li>
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										High ceilings with elegant chandeliers
									</li>
								</ul>
							</div>
						</div>

						{/* Facility Card 2 */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="relative h-64">
								<Image
									src="/images/meeting-rooms.jpg"
									alt="Meeting Rooms"
									fill
									style={{ objectFit: "cover" }}
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-green-700 mb-2">
									Meeting Rooms
								</h3>
								<p className="text-gray-600 mb-4">
									Multiple configurable meeting spaces perfect for breakout
									sessions, workshops, or intimate gatherings.
								</p>
								<ul className="text-gray-600 space-y-2">
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										Video conferencing capabilities
									</li>
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										Interactive whiteboards
									</li>
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										Ergonomic seating
									</li>
								</ul>
							</div>
						</div>

						{/* Facility Card 3 */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="relative h-64">
								<Image
									src="/images/dining-area.jpg"
									alt="Dining Area"
									fill
									style={{ objectFit: "cover" }}
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-green-700 mb-2">
									Dining & Catering
								</h3>
								<p className="text-gray-600 mb-4">
									Exquisite dining spaces with in-house catering services
									offering diverse menu options.
								</p>
								<ul className="text-gray-600 space-y-2">
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										Gourmet catering options
									</li>
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										Dietary accommodation
									</li>
									<li className="flex items-center">
										<svg
											className="w-4 h-4 text-green-500 mr-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										Full-service bar
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<Link
							href="/gallery"
							className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
						>
							View our gallery
							<svg
								className="w-5 h-5 ml-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</section>

			{/* What Makes Us Unique Section */}
			<section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">What Makes Us Unique</h2>
						<div className="w-24 h-1 bg-white mx-auto"></div>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-white/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-12 h-12"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-3">Innovative Design</h3>
							<p>
								Award-winning architecture that blends functionality with
								aesthetic beauty.
							</p>
						</div>

						<div className="text-center">
							<div className="bg-white/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-12 h-12"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-3">Expert Staff</h3>
							<p>
								Dedicated event professionals to ensure your event runs
								flawlessly.
							</p>
						</div>

						<div className="text-center">
							<div className="bg-white/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-12 h-12"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-3">
								Cutting-Edge Technology
							</h3>
							<p>
								Advanced audio-visual systems and high-speed connectivity
								throughout.
							</p>
						</div>

						<div className="text-center">
							<div className="bg-white/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-12 h-12"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-3">Sustainability</h3>
							<p>
								Eco-friendly practices and LEED-certified green building design.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Preview Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-green-700 mb-4">
							Gallery Preview
						</h2>
						<div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Take a glimpse at our stunning spaces and past events.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src="/images/gallery-1.jpg"
								alt="Gallery Image 1"
								fill
								style={{ objectFit: "cover" }}
								className="hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src="/images/gallery-2.jpg"
								alt="Gallery Image 2"
								fill
								style={{ objectFit: "cover" }}
								className="hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src="/images/gallery-3.jpg"
								alt="Gallery Image 3"
								fill
								style={{ objectFit: "cover" }}
								className="hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src="/images/gallery-4.jpg"
								alt="Gallery Image 4"
								fill
								style={{ objectFit: "cover" }}
								className="hover:scale-110 transition-transform duration-300"
							/>
						</div>
					</div>

					<div className="text-center mt-12">
						<Link
							href="/gallery"
							className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors inline-block"
						>
							View Full Gallery
						</Link>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-100">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-green-700 mb-4">
							Get In Touch
						</h2>
						<div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Have questions or ready to book your event? Contact us today.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-6">
							<div className="bg-white p-8 rounded-lg shadow-lg">
								<h3 className="text-2xl font-bold text-green-700 mb-6">
									Contact Information
								</h3>

								<div className="space-y-6">
									<div className="flex items-start">
										<div className="bg-green-100 p-3 rounded-full mr-4">
											<svg
												className="w-6 h-6 text-green-700"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
													clipRule="evenodd"
												></path>
											</svg>
										</div>
										<div>
											<h4 className="font-medium text-gray-800">Address</h4>
											<p className="text-gray-600 mt-1">
												2FF4+J5X, Ernakulam - Thekkady Rd, Pattimattom, Kerala
												683562
											</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="bg-green-100 p-3 rounded-full mr-4">
											<svg
												className="w-6 h-6 text-green-700"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
											</svg>
										</div>
										<div>
											<h4 className="font-medium text-gray-800">Phone</h4>
											<p className="text-gray-600 mt-1">(123) 456-7890</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="bg-green-100 p-3 rounded-full mr-4">
											<svg
												className="w-6 h-6 text-green-700"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
												<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
											</svg>
										</div>
										<div>
											<h4 className="font-medium text-gray-800">Email</h4>
											<p className="text-gray-600 mt-1">
												info@mimsconvention.com
											</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="bg-green-100 p-3 rounded-full mr-4">
											<svg
												className="w-6 h-6 text-green-700"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
													clipRule="evenodd"
												></path>
											</svg>
										</div>
										<div>
											<h4 className="font-medium text-gray-800">Hours</h4>
											<p className="text-gray-600 mt-1">
												Monday - Friday: 9:00 AM - 6:00 PM
											</p>
											<p className="text-gray-600">
												Saturday: 10:00 AM - 4:00 PM
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Map */}
							<Map />
						</div>

						<ContactForm />
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-green-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Mims Convention Centre</h3>
							<p className="text-green-200 mb-4">
								Where extraordinary events come to life.
							</p>
							<div className="flex space-x-4">
								<a href="#" className="text-white hover:text-green-200">
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
								<a href="#" className="text-white hover:text-green-200">
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
								<a href="#" className="text-white hover:text-green-200">
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
									<Link href="/" className="text-green-200 hover:text-white">
										Home
									</Link>
								</li>
								<li>
									<Link
										href="#about"
										className="text-green-200 hover:text-white"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="#facilities"
										className="text-green-200 hover:text-white"
									>
										Facilities
									</Link>
								</li>
								<li>
									<Link
										href="/gallery"
										className="text-green-200 hover:text-white"
									>
										Gallery
									</Link>
								</li>
								<li>
									<Link
										href="#contact"
										className="text-green-200 hover:text-white"
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
									<a href="#" className="text-green-200 hover:text-white">
										Corporate Events
									</a>
								</li>
								<li>
									<a href="#" className="text-green-200 hover:text-white">
										Weddings
									</a>
								</li>
								<li>
									<a href="#" className="text-green-200 hover:text-white">
										Conferences
									</a>
								</li>
								<li>
									<a href="#" className="text-green-200 hover:text-white">
										Trade Shows
									</a>
								</li>
								<li>
									<a href="#" className="text-green-200 hover:text-white">
										Social Gatherings
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-4">Newsletter</h3>
							<p className="text-green-200 mb-4">
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
									className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition-colors"
								>
									Subscribe
								</button>
							</form>
						</div>
					</div>

					<div className="border-t border-green-800 mt-12 pt-8 text-center text-green-300">
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
