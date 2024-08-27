import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section with Background Image */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('img/well.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Mobile World</h1>
          <p className="text-xl mb-6">Discover the latest smartphones at unbeatable prices</p>
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Get your orders delivered quickly with our fast and reliable shipping services.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Enjoy the best deals on the latest smartphones and accessories.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-3 0a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">We’re here to help anytime, day or night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Upgrade Your Phone?</h2>
          <p className="text-lg mb-8">Explore our collection and find the perfect smartphone for you.</p>
          <Link
            to="/products"
            className="bg-white text-blue-600 hover:text-blue-700 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Link to="/" className="text-xl font-semibold hover:underline">Mobile World</Link>
          </div>
         
          <div>
            <p className="text-sm">&copy; 2024 Mobile World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
