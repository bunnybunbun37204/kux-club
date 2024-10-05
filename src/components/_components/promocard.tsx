import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide React icons
import { useCallback, useEffect, useState } from "react";

const images = ["/jersy.jpg", "/jersey2.jpg", "/jersey3.jpg"]; // Replace with your actual image URLs

export const PromoCard = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleNext = useCallback(() => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	}, []);

	const handlePrev = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length,
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval); // Clean up on unmount
	}, [handleNext]);

	return (
		<section className="relative w-full h-screen overflow-hidden">
			{/* Image Container */}
			<div
				className="w-full h-full flex transition-transform duration-500 ease-in-out absolute inset-0"
				style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
			>
				{/* Map through images and create image elements */}
				{images.map((image, index) => (
					<img
						key={index.toString()}
						src={image}
						alt="Promotional"
						className="w-full h-full object-cover flex-shrink-0"
					/>
				))}
			</div>

			{/* Overlay Content (Text and Button) */}
			<div className="relative z-10 px-4 md:px-8 text-primary h-full flex flex-col justify-center items-start md:items-center lg:items-start">
				<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-xs md:max-w-md lg:max-w-lg">
					HAVE IT WRAPPED AROUND YOUR FINGER
				</h2>

				{/* Button with underline effect */}
				<a
					href="/"
					className="text-base md:text-lg lg:text-xl inline-flex items-center group"
				>
					<Button variant="secondary" asChild>
						<a href="/shop">Let's Shop</a>
					</Button>
				</a>
			</div>

			{/* Left and Right Arrow Controls */}
			<div className="absolute inset-y-0 left-0 flex items-center z-20">
				<Button
					onClick={handlePrev} // Switch image to the previous one on click
					className="p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
				>
					<ChevronLeft className="w-8 h-8" />
				</Button>
			</div>

			<div className="absolute inset-y-0 right-0 flex items-center z-20">
				<Button
					onClick={handleNext} // Switch image to the next one on click
					className="p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
				>
					<ChevronRight className="w-8 h-8" />
				</Button>
			</div>

			{/* Optional: Overlay for color effect */}
			<div className="absolute inset-0 bg-background bg-opacity-20" />
		</section>
	);
};
