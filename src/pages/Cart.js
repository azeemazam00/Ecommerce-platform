import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded shadow">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>${item.price}</p>
              <div className="flex items-center mt-2">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="border p-1 w-16"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          onClick={handleProceedToCheckout}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
