'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const router = useRouter();
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-800 py-16 px-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
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
        ) : (
          <div className="max-w-2xl mx-auto">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-900 rounded-xl p-4 mb-4 flex items-center gap-4 border border-gray-700"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt="Product"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-gray-400">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 