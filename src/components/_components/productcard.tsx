import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { ShoppingCart } from "lucide-react"; // Import icon from Lucide React
import { useState } from "react";

export const ProductCard = () => {
	const [isImageOpen, setIsImageOpen] = useState(false);

	const handleImageClick = () => {
		setIsImageOpen(true);
	};

	const handleCloseImage = () => {
		setIsImageOpen(false);
	};

	return (
		<div className="max-w-md mx-auto bg-transparent border-none rounded-lg overflow-hidden">
			{/* Image Section */}
			<div className="h-80 bg-transparent flex justify-center items-center">
				<img
					src="/jersey3.jpg"
					alt="Product"
					className="object-contain h-full cursor-pointer"
					onClick={handleImageClick} // Click event to expand the image
					onKeyDown={() => {}}
				/>
			</div>
			{/* Product Info */}
			<div className="p-4">
				<h2 className="text-lg font-bold text-primary">
					DRY-EX CREW NECK SHORT SLEEVE T-SHIRT (LIGHT)
				</h2>
				<p className="text-sm text-gray-700">Product ID: 467544</p>
				<div className="flex justify-between items-center my-2">
					<span className="text-gray-500">Size: Unisex M</span>
					<span className="text-lg text-highlight">+20</span>
				</div>
				{/* Size Selection */}
				<div className="flex space-x-2 mb-4">
					{["SS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map((size) => (
						<Button
							key={size}
							className="flex-1 bg-white text-black hover:bg-hover rounded-md border border-gray-400"
						>
							{size}
						</Button>
					))}
				</div>
				{/* Add to Cart Button */}
				<Button className="w-full bg-primary text-accent hover:bg-hover rounded-md flex items-center justify-center">
					<ShoppingCart className="mr-2" /> Add to Cart
				</Button>
			</div>

			{/* Full-Screen Image Modal */}
			{isImageOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
					onKeyDown={() => {}}
					onClick={handleCloseImage} // Click event to close the modal
				>
					<img
						src="/jersey3.jpg"
						alt="Full Product"
						className="max-w-full max-h-full cursor-pointer"
						onKeyDown={() => {}}
						onClick={(e) => e.stopPropagation()} // Prevent click event from closing the modal
					/>
				</div>
			)}
		</div>
	);
};
