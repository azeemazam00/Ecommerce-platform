import React, { useEffect, useState } from 'react';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from local storage
    const savedOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Order #{index + 1}</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Items:</h3>
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-2">
                  <p>{item.name} (x{item.quantity})</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Shipping Information:</h3>
              <p>{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
              <p>{order.shippingInfo.address}</p>
              <p>{order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.zipCode}</p>
              <p>Email: {order.shippingInfo.email}</p>
              <p>Phone: {order.shippingInfo.phoneNumber}</p>
            </div>
            <div className="font-semibold text-lg border-t pt-4 mt-4">
              <p>Total: ${order.total.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistoryPage;
