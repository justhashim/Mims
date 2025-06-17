"use client";

import { useState } from "react";

interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	eventType: string;
	eventDate: string;
	guestCount: string;
	message: string;
}

const ContactForm = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		phone: "",
		eventType: "",
		eventDate: "",
		guestCount: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const eventTypes = [
		"Corporate Event",
		"Wedding",
		"Conference",
		"Trade Show",
		"Social Gathering",
		"Birthday Party",
		"Anniversary",
		"Other",
	];

	const guestCounts = [
		"1-50 guests",
		"51-100 guests",
		"101-200 guests",
		"201-300 guests",
		"301-500 guests",
		"500+ guests",
	];

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log("Form submitted:", formData);
			setSubmitStatus("success");

			// Reset form after successful submission
			setFormData({
				name: "",
				email: "",
				phone: "",
				eventType: "",
				eventDate: "",
				guestCount: "",
				message: "",
			});
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="modern-card p-8 lg:p-10 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 group border border-teal-100 hover:border-teal-300 relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-50"></div>

			<div className="relative z-10">
				<div className="flex items-center mb-8">
					<div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-2xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-teal">
						<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</div>
					<div>
						<h3 className="text-3xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300 mb-1">
							Send Us a Message
						</h3>
						<p className="text-slate-800 text-lg">
							We'll get back to you within 24 hours
						</p>
					</div>
				</div>
			</div>

			<div className="relative z-10">
				{submitStatus === "success" && (
					<div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl shadow-soft">
						<div className="flex items-center">
							<div className="bg-emerald-500 p-2 rounded-full mr-4">
								<svg
									className="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<div>
								<p className="text-emerald-800 font-semibold text-lg mb-1">
									Message Sent Successfully!
								</p>
								<p className="text-emerald-700">
									Thank you! We'll get back to you within 24 hours.
								</p>
							</div>
						</div>
					</div>
				)}

				{submitStatus === "error" && (
					<div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl shadow-soft">
						<div className="flex items-center">
							<div className="bg-red-500 p-2 rounded-full mr-4">
								<svg
									className="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<div>
								<p className="text-red-800 font-semibold text-lg mb-1">
									Oops! Something went wrong
								</p>
								<p className="text-red-700">
									Please try again or call us directly at +91 95443 11236.
								</p>
							</div>
						</div>
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-8 relative z-10">
					{/* Personal Information */}
					<div className="grid lg:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label
								htmlFor="name"
								className="block text-base font-semibold text-slate-900 mb-3"
							>
								Full Name *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-teal-400 bg-white/80 backdrop-blur-sm text-lg"
								placeholder="Enter your full name"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="email"
								className="block text-base font-semibold text-slate-900 mb-3"
							>
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-teal-400 bg-white/80 backdrop-blur-sm text-lg"
								placeholder="your.email@example.com"
							/>
						</div>
					</div>

					{/* Contact Information */}
					<div className="grid lg:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label
								htmlFor="phone"
								className="block text-base font-semibold text-slate-900 mb-3"
							>
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-teal-400 bg-white/80 backdrop-blur-sm text-lg"
								placeholder="+91 98765 43210"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="eventType"
								className="block text-base font-semibold text-slate-900 mb-3"
							>
								Event Type
							</label>
							<select
								id="eventType"
								name="eventType"
								value={formData.eventType}
								onChange={handleChange}
								className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-teal-400 bg-white/80 backdrop-blur-sm text-lg appearance-none cursor-pointer"
							>
								<option value="">Select event type</option>
								{eventTypes.map((type) => (
									<option key={type} value={type}>
										{type}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Event Details */}
					<div className="grid lg:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label
								htmlFor="eventDate"
								className="block text-base font-semibold text-slate-900 mb-3"
							>
								Preferred Event Date
							</label>
							<input
								type="date"
								id="eventDate"
								name="eventDate"
								value={formData.eventDate}
								onChange={handleChange}
								min={new Date().toISOString().split("T")[0]}
								className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-teal-400 bg-white/80 backdrop-blur-sm text-lg"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="guestCount"
								className="block text-base font-semibold text-slate-900 mb-3"
							>
								Expected Guest Count
							</label>
							<select
								id="guestCount"
								name="guestCount"
								value={formData.guestCount}
								onChange={handleChange}
								className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-teal-400 bg-white/80 backdrop-blur-sm text-lg appearance-none cursor-pointer"
							>
								<option value="">Select guest count</option>
								{guestCounts.map((count) => (
									<option key={count} value={count}>
										{count}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Message */}
					<div className="space-y-2">
						<label
							htmlFor="message"
							className="block text-base font-semibold text-slate-900 mb-3"
						>
							Message *
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={6}
							className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-teal-400 resize-none bg-white/80 backdrop-blur-sm text-lg"
							placeholder="Tell us about your event requirements, special needs, or any questions you have..."
						/>
					</div>

					{/* Enhanced Submit Button */}
					<div className="pt-4">
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 hover:scale-105 transform disabled:hover:scale-100 disabled:cursor-not-allowed shadow-soft hover:shadow-teal group relative overflow-hidden"
						>
							{/* Button background animation */}
							<div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

							<div className="relative z-10">
								{isSubmitting ? (
									<div className="flex items-center justify-center">
										<svg
											className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										<span>Sending Message...</span>
									</div>
								) : (
									<div className="flex items-center justify-center">
										<span>Send Message</span>
										<svg
											className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
											/>
										</svg>
									</div>
								)}
							</div>
						</button>
					</div>

					{/* Enhanced Additional Info */}
					<div className="text-center pt-8 border-t border-slate-200/50">
						<div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-2xl border border-teal-100">
							<div className="flex items-center justify-center mb-3">
								<svg
									className="w-5 h-5 text-teal-600 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span className="text-lg font-semibold text-slate-900">
									Need immediate assistance?
								</span>
							</div>
							<p className="text-slate-800 mb-3">
								Our team is available 24/7 to help with your event planning
								needs
							</p>
							<a
								href="tel:+919544311236"
								className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform shadow-soft hover:shadow-teal"
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								Call +91 95443 11236
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
