import React, { useState } from 'react';
import { BarChart, Calendar, AlertTriangle, TrendingUp, Trash2, Utensils, Settings, ChevronRight } from 'lucide-react';



const SmartKitchenDashboard = ({setIsLoggedIn}) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Sample data
  const wasteData = {
    daily: "$127.50",
    weekly: "$892.30",
    monthly: "$3,745.80",
    savingsThisMonth: "14%"
  };

  const inventoryHealth = 87;

  const criticalAlerts = [
    { id: 1, type: 'expiry', item: 'Fresh Tomatoes', timeframe: '24 hours', action: 'Use or freeze' },
    { id: 2, type: 'lowStock', item: 'Chicken Breast', timeframe: 'Order today', action: 'Place order' },
    { id: 3, type: 'waste', item: 'Rice', timeframe: 'High waste detected', action: 'Review portions' }
  ];

  const expiringItems = [
    { id: 1, name: 'Lettuce', quantity: '3.2 kg', expiry: '1 day', suggestion: 'Special salad menu' },
    { id: 2, name: 'Heavy Cream', quantity: '1.5 L', expiry: '2 days', suggestion: 'Cream-based soup' },
    { id: 3, name: 'Bell Peppers', quantity: '2.4 kg', expiry: '2 days', suggestion: 'Stuffed peppers special' }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT token
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Smart Kitchen Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              RC
            </div>
          </div>
        </div>
      </header>

      <button onClick={handleLogout}>Logout</button>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm p-4">
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full text-left p-3 rounded-md flex items-center ${selectedTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSelectedTab('overview')}
              >
                <BarChart className="w-5 h-5 mr-3" />
                Dashboard Overview
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-3 rounded-md flex items-center ${selectedTab === 'inventory' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSelectedTab('Inventory')}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Inventory Management
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-3 rounded-md flex items-center ${selectedTab === 'menu' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSelectedTab('menu')}
              >
                <Utensils className="w-5 h-5 mr-3" />
                Menu Optimization
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-3 rounded-md flex items-center ${selectedTab === 'waste' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSelectedTab('waste')}
              >
                <Trash2 className="w-5 h-5 mr-3" />
                Waste Analysis
              </button>
            </li>
          </ul>
        </nav>

        {/* Main dashboard content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Waste metrics card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Food Waste Cost</h2>
                <Trash2 className="w-5 h-5 text-red-500" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Today</span>
                  <span className="font-semibold">{wasteData.daily}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-semibold">{wasteData.weekly}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-semibold">{wasteData.monthly}</span>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-green-500 font-medium">{wasteData.savingsThisMonth} savings vs. last month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory health card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Inventory Health</h2>
                <Calendar className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex flex-col items-center">
                <div className="relative h-36 w-36 mb-4">
                  <div className="h-full w-full rounded-full bg-gray-100 absolute"></div>
                  <div
                    className="h-full w-full rounded-full absolute"
                    style={{
                      background: `conic-gradient(#3b82f6 ${inventoryHealth}%, transparent 0)`,
                      transform: 'rotate(-90deg)'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{inventoryHealth}%</span>
                  </div>
                </div>
                <button className="mt-2 text-blue-600 font-medium flex items-center">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Critical alerts card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Critical Alerts</h2>
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-4">
                {criticalAlerts.map(alert => (
                  <div key={alert.id} className="flex items-start p-3 bg-amber-50 rounded-md">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">{alert.item}</h3>
                      <p className="text-sm text-gray-600">{alert.timeframe}</p>
                      <button className="mt-1 text-sm text-blue-600">{alert.action}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expiring items section */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Items Approaching Expiry</h2>
              <button className="text-blue-600 text-sm font-medium">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires In</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suggested Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {expiringItems.map(item => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                          {item.expiry}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.suggestion}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-800">Use Now</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Visual monitoring section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Visual Monitoring</h2>
              <button className="text-blue-600 text-sm font-medium">Expand View</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-100 aspect-video rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Camera Feed {i}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SmartKitchenDashboard;