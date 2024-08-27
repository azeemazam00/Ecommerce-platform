import React from 'react';

const AdminPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Dashboard Header */}
        <header className="bg-blue-50 shadow-lg rounded-lg mb-8 p-8 border-b-4 border-blue-600">
          <h1 className="text-3xl font-extrabold text-gray-900">Dashboard Overview</h1>
        </header>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Users Widget */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-blue-300 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Users</h2>
            <p className="text-gray-700 mb-4">Manage all user accounts and view user statistics.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Total Users:</span>
              <span className="text-blue-700 font-semibold text-xl">1,234</span>
            </div>
          </div>

          {/* Orders Widget */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-green-300 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Orders</h2>
            <p className="text-gray-700 mb-4">Track and manage all orders placed on the platform.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Total Orders:</span>
              <span className="text-green-700 font-semibold text-xl">567</span>
            </div>
          </div>

          {/* Products Widget */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-purple-300 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Products</h2>
            <p className="text-gray-700 mb-4">Add, update, and manage product listings.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Total Products:</span>
              <span className="text-purple-700 font-semibold text-xl">89</span>
            </div>
          </div>

          {/* Reports Widget */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-orange-300 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reports</h2>
            <p className="text-gray-700 mb-4">Generate detailed reports on various metrics.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Recent Report:</span>
              <span className="text-orange-700 font-semibold text-xl">Sales Report - July</span>
            </div>
          </div>

          {/* Settings Widget */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-red-300 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-700 mb-4">Configure system settings and manage preferences.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Last Updated:</span>
              <span className="text-red-700 font-semibold text-xl">August 10, 2024</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
