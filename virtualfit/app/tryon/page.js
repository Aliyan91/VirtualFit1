'use client';
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function TryOnPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const userImage = searchParams.get('userImage');
  
  // Get and parse the complete item details
  const itemDetailsString = searchParams.get('itemDetails');
  const itemDetails = itemDetailsString ? JSON.parse(decodeURIComponent(itemDetailsString)) : null;

  const handleNext = () => {
    // Navigate to result page with the same parameters
    router.push(`/result?itemDetails=${itemDetailsString}&userImage=${userImage}`);
  };

  const handleBack = () => {
    router.push('/catalog');
  };

  return (
    <div className="min-h-screen bg-gray-800 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          Virtual Try-On
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Confirm your selection
        </p>
        
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* User's Image */}
            <div className="relative w-72 h-[450px] rounded-xl overflow-hidden 
              shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-gray-700 group">
              {userImage && (
                <>
                  <Image
                    src={userImage}
                    alt="Your photo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute bottom-4 left-4 text-white text-sm font-medium">Your Photo</span>
                  </div>
                </>
              )}
            </div>

            {/* Plus Sign */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl text-blue-500 font-light">+</div>
              <div className="text-gray-500 text-sm">Combine</div>
            </div>

            {/* Selected Clothing */}
            <div className="relative w-72 h-[450px] rounded-xl overflow-hidden 
              shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-gray-700 group">
              {itemDetails && (
                <>
                  <Image
                    src={itemDetails.image}
                    alt={itemDetails.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white space-y-1">
                      <h3 className="font-medium">{itemDetails.name}</h3>
                      <p className="text-sm text-gray-300">{itemDetails.brand}</p>
                      <p className="text-sm font-medium text-blue-400">{itemDetails.price}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handleBack}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full 
                transition duration-300 font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Catalog
            </button>
            <button 
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full 
                transition duration-300 font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Generate Result
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 