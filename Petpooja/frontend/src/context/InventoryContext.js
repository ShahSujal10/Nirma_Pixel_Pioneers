import React, { createContext, useState, useContext } from 'react';

// Create the Inventory Context
const InventoryContext = createContext();

// Create a provider component
export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Tomatoes", quantity: 50, expiry: "2025-04-10" },
    { id: 2, name: "Milk", quantity: 20, expiry: "2024-04-05" },
    { id: 3, name: "Cheese", quantity: 15, expiry: "2024-04-12" },
  ]);

  const addItem = (newItem) => {
    setInventory((prev) => [...prev, { id: Date.now(), ...newItem }]);
  };

  const deleteItem = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  const startEditing = (id, quantity) => {
    // You can implement any editing state management here, or pass down setters to individual components
  };

  const saveQuantity = (id, editedQuantity) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: editedQuantity } : item
      )
    );
  };

  const adjustQuantity = (id, change) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
    );
  };

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        addItem,
        deleteItem,
        startEditing,
        saveQuantity,
        adjustQuantity,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

// Custom hook to use the Inventory context
export const useInventory = () => {
  return useContext(InventoryContext);
};
