import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			{/* 1. Headline Section - Modern and elegant hero */}
			<section className="min-h-screen py-24 bg-gray-50 flex items-center">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left side - Value proposition */}
						<div className="text-left bg-gray-100 p-4 md:p-8 rounded-xl shadow-lg h-auto md:h-[550px] flex flex-col justify-center animate-fade-in-up">
							<span className="text-gray-500 font-medium mb-2 block animate-fade-in-up animation-delay-200">
								PREMIER EVENT VENUE
							</span>
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-400">
								Your Perfect Event Space
							</h1>
							<p className="text-xl text-gray-600 mb-8 max-w-xl animate-fade-in-up animation-delay-600">
								Mims Convention Centre offers versatile spaces for any occasion,
								from corporate events to elegant weddings.
							</p>

							{/* Stats Cards */}
							<div className="grid grid-cols-3 gap-2 md:gap-6 mb-10 animate-fade-in-up animation-delay-800">
								<div className="bg-white p-3 md:p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 group">
									<div className="text-gray-900 text-2xl md:text-3xl font-bold group-hover:text-blue-600 transition-colors duration-300">
										500+
									</div>
									<div className="text-gray-500 text-xs md:text-sm">
										Seating Capacity
									</div>
								</div>
								<div className="bg-white p-3 md:p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 group animation-delay-100">
									<div className="text-gray-900 text-2xl md:text-3xl font-bold group-hover:text-blue-600 transition-colors duration-300">
										250+
									</div>
									<div className="text-gray-500 text-xs md:text-sm">
										Parking Space
									</div>
								</div>
								<div className="bg-white p-3 md:p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 group animation-delay-200">
									<div className="text-gray-900 text-2xl md:text-3xl font-bold group-hover:text-blue-600 transition-colors duration-300">
										50+
									</div>
									<div className="text-gray-500 text-xs md:text-sm">
										Events Hosted
									</div>
								</div>
							</div>

							<div className="flex space-x-2 sm:space-x-4 animate-fade-in-up animation-delay-1000">
								<button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-3 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-full text-xs sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 transform">
									Discover & Explore
								</button>
								<Link
									href="#contact"
									className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-full text-xs sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 transform text-center"
								>
									Contact Us
								</Link>
							</div>
						</div>

						{/* Right side - Image */}
						<div className="relative animate-fade-in-right animation-delay-500">
							<div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
								<div className="relative h-[550px] w-full">
									<Image
										src="/images/convention-center.jpg"
										alt="Mims Convention Centre"
										fill
										style={{ objectFit: "cover" }}
										priority
										className="hover:scale-110 transition-transform duration-700"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. Visual Focus Section */}
			<section className="py-20 bg-gray-800 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
							Experience Excellence
						</h2>
						<div className="w-24 h-1 bg-blue-500 mx-auto animate-scale-in animation-delay-300"></div>
					</div>

					<div className="relative h-96 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-fade-in-up animation-delay-500 group">
						<Image
							src="/images/interior.jpg"
							alt="Mims Convention Centre Interior"
							fill
							style={{ objectFit: "cover" }}
							className="group-hover:scale-105 transition-transform duration-700"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
							<div className="p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<h3 className="text-2xl font-bold mb-2 animate-fade-in-up animation-delay-700">
									State-of-the-Art Facilities
								</h3>
								<p className="text-gray-300 animate-fade-in-up animation-delay-900">
									Designed to impress and built to perform
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. Benefits Section */}
			<section id="facilities" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
							Why Choose Us
						</h2>
						<div className="w-24 h-1 bg-blue-500 mx-auto mb-6 animate-scale-in animation-delay-300"></div>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Benefit 1 */}
						<div className="bg-gray-50 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 group animate-fade-in-up animation-delay-200">
							<div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-blue-600">
								<svg
									className="w-8 h-8 group-hover:animate-pulse"
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
							<h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
								Innovative Design
							</h3>
							<p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
								Award-winning architecture that blends functionality with
								aesthetic beauty.
							</p>
						</div>

						{/* Benefit 2 */}
						<div className="bg-gray-50 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 group animate-fade-in-up animation-delay-400">
							<div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-blue-600">
								<svg
									className="w-8 h-8 group-hover:animate-pulse"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
								Expert Staff
							</h3>
							<p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
								Dedicated event professionals to ensure your event runs
								flawlessly.
							</p>
						</div>

						{/* Benefit 3 */}
						<div className="bg-gray-50 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 group animate-fade-in-up animation-delay-600">
							<div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-blue-600">
								<svg
									className="w-8 h-8 group-hover:animate-pulse"
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
							<h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
								Cutting-Edge Technology
							</h3>
							<p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
								Advanced audio-visual systems and high-speed connectivity
								throughout.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 4. Social Proof Section */}
			<section className="py-20 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
							What Our Clients Say
						</h2>
						<div className="w-24 h-1 bg-blue-500 mx-auto animate-scale-in animation-delay-300"></div>
					</div>

					<div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-500 group">
						<svg
							className="w-12 h-12 text-blue-500 mb-6 animate-bounce group-hover:animate-pulse"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
						</svg>
						<p className="text-xl italic mb-6 animate-fade-in-up animation-delay-700 group-hover:text-blue-100 transition-colors duration-300">
							&ldquo;Mims Convention Centre exceeded all our expectations. The
							venue is stunning, the staff was professional, and our guests were
							thoroughly impressed. We couldn&apos;t have asked for a better
							experience for our annual corporate conference.&rdquo;
						</p>
						<div className="flex items-center animate-fade-in-up animation-delay-900">
							<div className="w-12 h-12 bg-blue-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 animate-pulse"></div>
							<div>
								<h4 className="font-bold group-hover:text-blue-300 transition-colors duration-300">
									Sarah Johnson
								</h4>
								<p className="text-blue-400 group-hover:text-blue-200 transition-colors duration-300">
									CEO, TechCorp International
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 5. Storytelling Section */}
			<section id="about" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="relative h-96 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 animate-fade-in-left group">
							<Image
								src="/images/grand-hall.jpg"
								alt="Mims Convention Centre Grand Hall"
								fill
								style={{ objectFit: "cover" }}
								className="group-hover:scale-105 transition-transform duration-700"
							/>
						</div>

						<div className="animate-fade-in-right animation-delay-300">
							<h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
								Our Story
							</h2>
							<div className="w-24 h-1 bg-blue-500 mb-6 animate-scale-in animation-delay-500"></div>
							<p className="text-gray-600 mb-6 animate-fade-in-up animation-delay-600">
								Established in 2025, Mims Convention Centre was born from a
								vision to create a premier event destination that combines
								stunning architecture with unparalleled functionality.
							</p>
							<p className="text-gray-600 mb-6 animate-fade-in-up animation-delay-700">
								Our venue has hosted thousands of successful events, from
								international conferences to elegant weddings. We&apos;ve built
								our reputation on attention to detail, exceptional service, and
								creating memorable experiences for every client.
							</p>
							<p className="text-gray-600 animate-fade-in-up animation-delay-800">
								Located in the heart of the city, our convention centre combines
								accessibility with luxury, offering guests an unforgettable
								experience from the moment they arrive.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 6. Guarantee Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
							Our Guarantee
						</h2>
						<div className="w-24 h-1 bg-blue-500 mx-auto mb-8 animate-scale-in animation-delay-300"></div>

						<div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-500 group">
							<p className="text-gray-600 mb-6 animate-fade-in-up animation-delay-600 group-hover:text-gray-700 transition-colors duration-300">
								At Mims Convention Centre, we&apos;re committed to making your
								event a success. We guarantee professional service,
								state-of-the-art facilities, and dedicated support throughout
								your event planning process.
							</p>
							<p className="text-gray-600 mb-6 animate-fade-in-up animation-delay-700 group-hover:text-gray-700 transition-colors duration-300">
								Our flexible booking policies ensure peace of mind, with
								transparent pricing and no hidden fees. We offer comprehensive
								event packages that can be customized to meet your specific
								needs and budget.
							</p>
							<p className="text-gray-600 animate-fade-in-up animation-delay-800 group-hover:text-gray-700 transition-colors duration-300">
								If any aspect of our service doesn&apos;t meet your
								expectations, our management team will work directly with you to
								make it right. Your satisfaction is our highest priority.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 7. Call to Action Section */}
			<section className="py-20 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
							Ready to Book Your Event?
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
							Choose the option that works best for you
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-gray-700 group animate-fade-in-up animation-delay-200">
							<h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
								Book a Tour
							</h3>
							<p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
								Visit our facilities and see the spaces in person
							</p>
							<Link
								href="#contact"
								className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-all duration-300 w-full hover:scale-105 transform"
							>
								Schedule Now
							</Link>
						</div>

						<div className="bg-blue-600 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-500 transform scale-105 hover:scale-110 group animate-fade-in-up animation-delay-400 animate-pulse">
							<h3 className="text-xl font-bold mb-4 group-hover:animate-bounce">
								Request a Quote
							</h3>
							<p className="text-blue-100 mb-6 group-hover:text-white transition-colors duration-300">
								Get a customized proposal for your event
							</p>
							<Link
								href="#contact"
								className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md transition-all duration-300 w-full font-medium hover:scale-105 transform hover:shadow-lg"
							>
								Get Quote
							</Link>
						</div>

						<div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-gray-700 group animate-fade-in-up animation-delay-600">
							<h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
								Contact Us
							</h3>
							<p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
								Speak with our event planning team
							</p>
							<Link
								href="#contact"
								className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-all duration-300 w-full hover:scale-105 transform"
							>
								Reach Out
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
							Get In Touch
						</h2>
						<div className="w-24 h-1 bg-blue-500 mx-auto mb-6 animate-scale-in animation-delay-300"></div>
						<p className="text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
							Have questions or ready to book your event? Contact us today.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-6 animate-fade-in-left animation-delay-200">
							<div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
								<h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
									Contact Information
								</h3>

								<div className="space-y-6">
									<div className="flex items-start">
										<a
											href="https://maps.app.goo.gl/hGPrwY4bsFPdP9XG9"
											target="_blank"
											className="flex items-start hover:opacity-80 transition-opacity"
										>
											<div className="bg-blue-100 p-3 rounded-full mr-4">
												<svg
													className="w-6 h-6 text-blue-600"
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
										</a>
									</div>

									<div className="flex items-start">
										<a
											href="tel:+919544311236"
											className="flex items-start hover:opacity-80 transition-opacity"
										>
											<div className="bg-blue-100 p-3 rounded-full mr-4">
												<svg
													className="w-6 h-6 text-blue-600"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
												</svg>
											</div>
											<div>
												<h4 className="font-medium text-gray-800">Phone</h4>
												<p className="text-gray-600 mt-1">+91 95443 11236</p>
											</div>
										</a>
									</div>

									<div className="flex items-start">
										<a
											href="mailto:info@mimsconvention.com"
											className="flex items-start hover:opacity-80 transition-opacity"
										>
											<div className="bg-blue-100 p-3 rounded-full mr-4">
												<svg
													className="w-6 h-6 text-blue-600"
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
										</a>
									</div>
								</div>
							</div>

							{/* Map */}
							<Map />
						</div>

						<div className="animate-fade-in-right animation-delay-400">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="animate-fade-in-up animation-delay-200">
							<h3 className="text-xl font-bold mb-4 hover:text-blue-300 transition-colors duration-300">
								Mims Convention Centre
							</h3>
							<p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
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

						<div className="animate-fade-in-up animation-delay-400">
							<h3 className="text-lg font-semibold mb-4 hover:text-blue-300 transition-colors duration-300">
								Quick Links
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href="#about"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="#facilities"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Facilities
									</Link>
								</li>
								<li>
									<Link
										href="/gallery"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Gallery
									</Link>
								</li>
								<li>
									<Link
										href="#contact"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div className="animate-fade-in-up animation-delay-600">
							<h3 className="text-lg font-semibold mb-4 hover:text-blue-300 transition-colors duration-300">
								Services
							</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Corporate Events
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Weddings
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Conferences
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Trade Shows
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
									>
										Social Gatherings
									</a>
								</li>
							</ul>
						</div>

						<div className="animate-fade-in-up animation-delay-800">
							<h3 className="text-lg font-semibold mb-4 hover:text-blue-300 transition-colors duration-300">
								Newsletter
							</h3>
							<p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
								Subscribe to our newsletter for updates and special offers.
							</p>
							<form className="flex">
								<input
									type="email"
									placeholder="Your email"
									className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
								/>
								<button
									type="submit"
									className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-all duration-300 hover:scale-105 transform"
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
