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
		<div className="modern-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-teal-100">
			<div className="flex items-center mb-6">
				<div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</div>
				<h3 className="text-2xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
					Send Us a Message
				</h3>
			</div>

			{submitStatus === "success" && (
				<div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
					<div className="flex items-center">
						<svg
							className="w-5 h-5 text-emerald-600 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							></path>
						</svg>
						<p className="text-emerald-800 font-medium">
							Thank you! We'll get back to you within 24 hours.
						</p>
					</div>
				</div>
			)}

			{submitStatus === "error" && (
				<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
					<div className="flex items-center">
						<svg
							className="w-5 h-5 text-red-600 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clipRule="evenodd"
							></path>
						</svg>
						<p className="text-red-800 font-medium">
							Something went wrong. Please try again or call us directly.
						</p>
					</div>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Personal Information */}
				<div className="grid md:grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-semibold text-slate-700 mb-2"
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
							className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
							placeholder="Enter your full name"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-semibold text-slate-700 mb-2"
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
							className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
							placeholder="your.email@example.com"
						/>
					</div>
				</div>

				{/* Contact Information */}
				<div className="grid md:grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="phone"
							className="block text-sm font-semibold text-slate-700 mb-2"
						>
							Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
							placeholder="+91 98765 43210"
						/>
					</div>

					<div>
						<label
							htmlFor="eventType"
							className="block text-sm font-semibold text-slate-700 mb-2"
						>
							Event Type
						</label>
						<select
							id="eventType"
							name="eventType"
							value={formData.eventType}
							onChange={handleChange}
							className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 bg-white"
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
				<div className="grid md:grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="eventDate"
							className="block text-sm font-semibold text-slate-700 mb-2"
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
							className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
						/>
					</div>

					<div>
						<label
							htmlFor="guestCount"
							className="block text-sm font-semibold text-slate-700 mb-2"
						>
							Expected Guest Count
						</label>
						<select
							id="guestCount"
							name="guestCount"
							value={formData.guestCount}
							onChange={handleChange}
							className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 bg-white"
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
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-semibold text-slate-700 mb-2"
					>
						Message *
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={5}
						className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 resize-none"
						placeholder="Tell us about your event requirements, special needs, or any questions you have..."
					/>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 hover:scale-105 transform disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
				>
					{isSubmitting ? (
						<div className="flex items-center justify-center">
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
							Sending Message...
						</div>
					) : (
						<div className="flex items-center justify-center">
							<span>Send Message</span>
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
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
								/>
							</svg>
						</div>
					)}
				</button>

				{/* Additional Info */}
				<div className="text-center pt-4 border-t border-slate-200">
					<p className="text-sm text-slate-600">
						Need immediate assistance? Call us at{" "}
						<a
							href="tel:+919544311236"
							className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-300"
						>
							+91 95443 11236
						</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
