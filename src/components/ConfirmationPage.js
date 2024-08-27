import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return <p>No order data found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <p className="text-gray-700">{item.name} (x{item.quantity})</p>
            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex items-center justify-between font-semibold text-lg border-t pt-4 mt-4">
          <p>Total:</p>
          <p>${order.total.toFixed(2)}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Shipping Information</h2>
          <p><strong>Address:</strong> {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.zipCode}</p>
          <p><strong>Email:</strong> {order.shippingInfo.email}</p>
          <p><strong>Phone Number:</strong> {order.shippingInfo.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
