import React, { useEffect, useState } from 'react';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from local storage
    const savedOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Order History</h1>
      {orders.length === 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center text-gray-600">
          <p className="text-lg">No orders found.</p>
        </div>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Order #{index + 1}</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Items:</h3>
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-2 border-b border-blue-300 pb-2">
                  <p className="text-gray-800">{item.name} (x{item.quantity})</p>
                  <p className="font-semibold text-blue-800">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Shipping Information:</h3>
              <p className="text-gray-700">{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
              <p className="text-gray-700">{order.shippingInfo.address}</p>
              <p className="text-gray-700">{order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.zipCode}</p>
              <p className="text-gray-700">Email: {order.shippingInfo.email}</p>
              <p className="text-gray-700">Phone: {order.shippingInfo.phoneNumber}</p>
            </div>
            <div className="font-semibold text-xl border-t pt-4 mt-4 border-blue-200">
              <p className="text-blue-900">Total: ${order.total.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistoryPage;
