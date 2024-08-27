import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="text-xl font-bold">E-Commerce</Link>
        <div className="space-x-4">
          <Link to="/products" className="text-sm">Products</Link>
          <Link to="/cart" className="text-sm">Cart</Link>
          <Link to="/checkout" className="text-sm">Checkout</Link>
          <Link to="/admin" className="text-sm">Admin</Link>
          <Link to="/OrderHistoryPage" className="text-sm">orderHistory</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
