import React, { useState } from 'react';
import { Search, Filter, RefreshCw, Camera, AlertTriangle, ChevronRight, Plus } from 'lucide-react';

const InventoryManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample inventory categories
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'produce', name: 'Produce' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'meat', name: 'Meat & Poultry' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'pantry', name: 'Pantry Items' },
    { id: 'frozen', name: 'Frozen' },
    { id: 'spices', name: 'Spices & Herbs' },
  ];
  
  // Sample inventory data
  const inventoryItems = [
    { 
      id: 1, 
      name: 'Chicken Breast', 
      category: 'meat', 
      quantity: '7.3 kg', 
      unit: 'kg', 
      stockLevel: 'medium', 
      expiry: '4 days',
      status: 'normal'
    },
    { 
      id: 2, 
      name: 'Tomatoes', 
      category: 'produce', 
      quantity: '4.2 kg', 
      unit: 'kg', 
      stockLevel: 'low', 
      expiry: '1 day',
      status: 'expiring'
    },
    { 
      id: 3, 
      name: 'Milk', 
      category: 'dairy', 
      quantity: '8.5 L', 
      unit: 'L', 
      stockLevel: 'high', 
      expiry: '5 days',
      status: 'normal'
    },
    { 
      id: 4, 
      name: 'Onions', 
      category: 'produce', 
      quantity: '12.8 kg', 
      unit: 'kg', 
      stockLevel: 'high', 
      expiry: '14 days',
      status: 'normal'
    },
    { 
      id: 5, 
      name: 'Heavy Cream', 
      category: 'dairy', 
      quantity: '1.5 L', 
      unit: 'L', 
      stockLevel: 'low', 
      expiry: '2 days',
      status: 'expiring'
    },
    { 
      id: 6, 
      name: 'Salmon Fillet', 
      category: 'seafood', 
      quantity: '2.4 kg', 
      unit: 'kg', 
      stockLevel: 'low', 
      expiry: '1 day',
      status: 'expiring'
    },
    { 
      id: 7, 
      name: 'Rice', 
      category: 'pantry', 
      quantity: '18.2 kg', 
      unit: 'kg', 
      stockLevel: 'high', 
      expiry: '90 days',
      status: 'normal'
    },
    { 
      id: 8, 
      name: 'Bell Peppers', 
      category: 'produce', 
      quantity: '2.4 kg', 
      unit: 'kg', 
      stockLevel: 'medium', 
      expiry: '2 days',
      status: 'expiring'
    },
  ];
  
  // Filter inventory items based on search and category
  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Helper function to get style based on stock level
  const getStockLevelStyle = (level) => {
    switch(level) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'low': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Helper function to get style based on expiry status
  const getExpiryStyle = (status) => {
    switch(status) {
      case 'expiring': return 'text-red-500';
      default: return 'text-gray-600';
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 flex items-center">
              <RefreshCw className="w-4 h-4 mr-2" />
              Last Scan: 28 min ago
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center">
              <Camera className="w-4 h-4 mr-2" />
              Scan Now
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Search and filter toolbar */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-grow">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search inventory items..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <select
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Alerts section */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-amber-500 mr-3" />
            <div>
              <h3 className="font-medium text-amber-800">Approaching Expiry Items</h3>
              <p className="text-amber-700">3 items are expiring within 48 hours. Consider using them in today's menu.</p>
            </div>
            <button className="ml-auto px-3 py-1 bg-amber-200 text-amber-800 rounded-md text-sm">View All</button>
          </div>
        </div>
        
        {/* Inventory items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStockLevelStyle(item.stockLevel)}`}>
                    {item.stockLevel.charAt(0).toUpperCase() + item.stockLevel.slice(1)}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity</span>
                    <span className="font-medium">{item.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expires in</span>
                    <span className={`font-medium ${getExpiryStyle(item.status)}`}>{item.expiry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium capitalize">{item.category}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-between">
                <button className="text-gray-600 hover:text-gray-800">Update</button>
                <button className="text-blue-600 hover:text-blue-800 flex items-center">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;