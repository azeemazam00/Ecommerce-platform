import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import products from '../data/products.json';
import { addToCart } from '../redux/slices/cartSlice';

const ProductList = () => {
  const [notification, setNotification] = useState('');
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    
    // Show the notification message
    setNotification(`Item ${product.name} added to cart!`);
    
    // Hide the notification message after 3 seconds
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>
      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover rounded-lg mb-4" 
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{product.name}</h2>
            <p className="text-lg font-medium text-gray-900">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      {/* Notification Message */}
      {notification && (
        <div className="fixed bottom-4 right-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg shadow-md">
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
