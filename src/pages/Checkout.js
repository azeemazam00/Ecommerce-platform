import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      items: cartItems,
      shippingInfo: {
        firstName: form.firstName,
        lastName: form.lastName,
        address: form.address,
        city: form.city,
        state: form.state,
        zipCode: form.zipCode,
        email: form.email,
        phoneNumber: form.phoneNumber
      },
      total,
      paymentInfo: {
        cardNumber: form.cardNumber,
        cardExpiry: form.cardExpiry,
        cardCvv: form.cardCvv
      }
    };

    // Save order to local storage
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    localStorage.setItem('orderHistory', JSON.stringify([...orderHistory, order]));
    localStorage.removeItem('cartItems');

    // Navigate to the confirmation page with order data
    navigate('/confirmation', { state: { order } });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Checkout</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 border border-gray-200">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
              <p className="text-gray-800">{item.name} (x{item.quantity})</p>
              <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex items-center justify-between font-semibold text-lg border-t pt-4 mt-4 bg-gray-100 border-gray-200">
            <p>Total:</p>
            <p className="text-gray-900">${total.toFixed(2)}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleInputChange}
                className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleInputChange}
                className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleInputChange}
                className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleInputChange}
                className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={form.zipCode}
                onChange={handleInputChange}
                className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2">Payment Information</h2>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={form.cardNumber}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="cardExpiry"
                  placeholder="Expiry Date (MM/YY)"
                  value={form.cardExpiry}
                  onChange={handleInputChange}
                  className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="text"
                  name="cardCvv"
                  placeholder="CVV"
                  value={form.cardCvv}
                  onChange={handleInputChange}
                  className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
