import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = product.images || [];
  const currentImage = images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="border p-4 rounded-md shadow-lg relative">
      {/* Image with navigation arrows */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover mb-4"
          src={currentImage}
          alt={product.title}
        />

        {/* Previous Arrow */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 rounded-full p-1 shadow"
          >
            &#8592;
          </button>
        )}

        {/* Next Arrow */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 rounded-full p-1 shadow"
          >
            &#8594;
          </button>
        )}
      </div>

      {/* Product Details */}
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500 mb-2">Price: ${product.price}</p>
      
      {/* Category */}
      <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
      
      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="mb-4">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* View Details Button */}
      <Link
        href={`/products/${product.id}`}
        className="bg-gray-200 text-black py-2 px-4 rounded-md inline-block text-center"
      >
        View Details
      </Link>
    </div>
  );
}
