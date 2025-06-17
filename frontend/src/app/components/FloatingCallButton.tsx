"use client";

import { useState, useEffect } from "react";

const FloatingCallButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Show on all devices now (not just mobile)
		setIsVisible(true);
	}, []);

	if (!isVisible) return null;

	return (
		<div className="floating-call-container">
			{/* Tooltip */}
			<div className="floating-call-tooltip">Call Us Now</div>

			<a
				href="tel:+919544311236"
				className="floating-call-btn"
				aria-label="Call us now"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="floating-call-icon"
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
			</a>
		</div>
	);
};

export default FloatingCallButton;
