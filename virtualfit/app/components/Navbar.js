'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 dark:bg-gray-800 backdrop-blur-lg 
      border border-gray-400 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-8 py-4 w-[95%] max-w-3xl z-50">
      <div className="flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-gray-300 font-semibold text-lg pr-4 border-r border-gray-400">
          VirtualFit
        </div>

        {/* Navigation Links */}
        <div className="flex justify-around items-center flex-1 px-4">
          {/* Home/Upload Link */}
          <Link 
            href="/"
            className={`flex flex-col items-center px-4 transition-colors duration-200 ${
              pathname === '/' 
                ? 'text-blue-600' 
                : 'text-gray-300 hover:text-blue-500'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" 
              />
            </svg>
            <span className="text-xs mt-1 font-medium">Upload</span>
          </Link>

          {/* Catalog Link */}
          <Link 
            href="/catalog"
            className={`flex flex-col items-center px-4 transition-colors duration-200 ${
              pathname === '/catalog' 
                ? 'text-blue-600' 
                : 'text-gray-300 hover:text-blue-500'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
              />
            </svg>
            <span className="text-xs mt-1 font-medium">Catalog</span>
          </Link>

          {/* Cart Link */}
          <Link 
            href="/cart"
            className={`flex flex-col items-center px-4 transition-colors duration-200 ${
              pathname === '/cart' 
                ? 'text-blue-600' 
                : 'text-gray-300 hover:text-blue-500'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <span className="text-xs mt-1 font-medium">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 