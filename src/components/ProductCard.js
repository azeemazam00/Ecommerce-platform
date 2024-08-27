import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(product.options[0]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, selectedOption }));
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded"/>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>

      {product.options && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="mt-2 px-2 py-1 border rounded w-full"
        >
          {product.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      <button
        onClick={handleAddToCart}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
