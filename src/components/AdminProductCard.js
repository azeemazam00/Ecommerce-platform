import React from 'react';

const AdminProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-bold">{product.name}</h2>
    <p>${product.price}</p>
    {/* Add admin-specific functionality here */}
  </div>
);

export default AdminProductCard;
