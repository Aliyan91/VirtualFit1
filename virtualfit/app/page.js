'use client';
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const router = useRouter();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleBrowseCatalog = () => {
    router.push('/catalog');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            VirtualFit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Try on clothes virtually! Upload your photo and see how different outfits look on you instantly.
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              {/* Upload Area */}
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors relative
                  ${previewUrl ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600 hover:border-blue-500'}`}
              >
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/png, image/jpeg, image/jpg"
                  id="image-upload"
                  onChange={handleImageUpload}
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  {previewUrl ? (
                    <div className="relative w-full h-64">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-contain rounded-lg"
                      />
                      {/* Remove Image Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveImage();
                        }}
                        className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 
                          shadow-lg transition-colors duration-200"
                        title="Remove image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="mx-auto h-16 w-16 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          Upload your photo
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button 
                  className={`${
                    selectedImage 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-blue-400 cursor-not-allowed'
                  } text-white font-semibold py-3 px-8 rounded-full 
                    transition duration-300 ease-in-out transform hover:scale-105`}
                  disabled={!selectedImage}
                >
                  Try On Clothes
                </button>
                <button 
                  onClick={handleBrowseCatalog}
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                    text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                >
                  Browse Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Instant Try-On
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              See how clothes look on you in seconds with our AI-powered technology
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Wide Selection
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access thousands of clothing items from popular brands
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Save & Share
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Save your favorite looks and share them with friends
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
