"use client";

const Map = () => {
	return (
		<div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.911523974503!2d76.45288641039002!3d10.024159772577617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b0060b3aeed%3A0x4f238595afc22fff!2sMIMS%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1749982681985!5m2!1sen!2sin"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default Map;
