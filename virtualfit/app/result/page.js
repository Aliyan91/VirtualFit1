'use client';
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const userImage = searchParams.get('userImage');
  
  const itemDetailsString = searchParams.get('itemDetails');
  const itemDetails = itemDetailsString ? JSON.parse(decodeURIComponent(itemDetailsString)) : null;

  const handleSaveResult = () => {
    if (itemDetails) {
      const cartItem = {
        ...itemDetails,
        id: Date.now(),
      };
      addToCart(cartItem);
      router.push('/cart');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-800 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          Generated Result
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Here's how the outfit looks on you
        </p>
        
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
          {/* Result Display */}
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden 
            border border-gray-700 bg-gray-850 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 space-y-4">
              <svg 
                className="animate-spin h-8 w-8 text-blue-500" 
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
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-lg">Processing your virtual try-on...</span>
              <span className="text-sm text-gray-500">This may take a few moments</span>
            </div>
          </div>

          {/* Item Details */}
          <div className="mt-8 p-4 border-t border-gray-700">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={itemDetails?.image || ''}
                  alt={itemDetails?.name || ''}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-medium">{itemDetails?.name}</h3>
                <p className="text-gray-400">{itemDetails?.brand}</p>
                <p className="text-blue-400 font-medium mt-1">{itemDetails?.price}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handleBack}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full 
                transition duration-300 font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <button 
              onClick={handleSaveResult}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full 
                transition duration-300 font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Add to Cart
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 