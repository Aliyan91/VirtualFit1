'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Cart() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Your Cart
          </h1>
        </div>

        {/* Empty Cart State */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Empty Cart Icon */}
            <div className="w-32 h-32 text-gray-400 dark:text-gray-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Your cart is empty
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Looks like you haven't added any items to your cart yet
              </p>
            </div>

            {/* Continue Shopping Button */}
            <button
              onClick={() => router.push('/catalog')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full 
                transition duration-300 ease-in-out transform hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Shopping Summary (Hidden when cart is empty) */}
        <div className="hidden max-w-2xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Order Summary
            </h3>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="text-gray-800 dark:text-white font-medium">Rs. 0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                <span className="text-gray-800 dark:text-white font-medium">Rs. 0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">Tax</span>
                <span className="text-gray-800 dark:text-white font-medium">Rs. 0.00</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">Total</span>
                  <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">Rs. 0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 