// import { useState } from "react";
// import { FiEdit, FiTrash2, FiPlus, FiCheck, FiArrowUp, FiArrowDown } from "react-icons/fi";

// const Inventory = () => {
//   const [inventory, setInventory] = useState([
//     { id: 1, name: "Tomatoes", quantity: 50, expiry: "2025-04-10" },
//     { id: 2, name: "Milk", quantity: 20, expiry: "2024-04-05" },
//     { id: 3, name: "Cheese", quantity: 15, expiry: "2024-04-12" },
//   ]);
  
//   const [newItem, setNewItem] = useState({ name: "", quantity: "", expiry: "" });
//   const [editingItemId, setEditingItemId] = useState(null);
//   const [editedQuantity, setEditedQuantity] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const addItem = () => {
//     if (!newItem.name || !newItem.quantity || !newItem.expiry) return;
//     setInventory([...inventory, { id: Date.now(), ...newItem }]);
//     setNewItem({ name: "", quantity: "", expiry: "" });
//   };

//   const deleteItem = (id) => {
//     setInventory(inventory.filter((item) => item.id !== id));
//   };

//   const startEditing = (id, quantity) => {
//     setEditingItemId(id);
//     setEditedQuantity(quantity);
//   };

//   const saveQuantity = (id) => {
//     setInventory(inventory.map((item) => 
//       item.id === id ? { ...item, quantity: editedQuantity } : item
//     ));
//     setEditingItemId(null);
//   };

//   const adjustQuantity = (id, change) => {
//     setInventory(inventory.map((item) => 
//       item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
//     ));
//   };

//   const filteredItems = inventory
//     .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .sort((a, b) => new Date(a.expiry) - new Date(b.expiry));

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">Inventory Management</h1>
      
//       {/* Add New Item */}
//       <div className="bg-white p-4 rounded-xl shadow-md mb-6 flex gap-4">
//         <input
//           type="text"
//           placeholder="Item Name"
//           className="p-2 border rounded-lg flex-1"
//           value={newItem.name}
//           onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           className="p-2 border rounded-lg w-24"
//           value={newItem.quantity}
//           onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
//         />
//         <input
//           type="date"
//           className="p-2 border rounded-lg"
//           value={newItem.expiry}
//           onChange={(e) => setNewItem({ ...newItem, expiry: e.target.value })}
//         />
//         <button onClick={addItem} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           <FiPlus size={20} />
//         </button>
//       </div>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search items..."
//         className="p-2 border rounded w-full mb-4"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
      
//       {/* Inventory Table */}
//       <div className="bg-white p-4 rounded-xl shadow-md">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="text-gray-600 border-b">
//               <th className="p-3">Item</th>
//               <th className="p-3">Quantity</th>
//               <th className="p-3">Expiry Date</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredItems.map((item) => (
//               <tr key={item.id} className="border-b hover:bg-gray-50">
//                 <td className={`p-3 ${item.quantity <= 5 ? 'text-red-500' : ''}`}>{item.name}</td>
//                 <td className="p-3 flex items-center gap-2">
//                   {editingItemId === item.id ? (
//                     <input
//                       type="number"
//                       className="p-1 border rounded w-16"
//                       value={editedQuantity}
//                       onChange={(e) => setEditedQuantity(e.target.value)}
//                     />
//                   ) : (
//                     item.quantity
//                   )}
//                   <button onClick={() => adjustQuantity(item.id, 1)} className="text-green-500 hover:text-green-700">
//                     <FiArrowUp />
//                   </button>
//                   <button onClick={() => adjustQuantity(item.id, -1)} className="text-red-500 hover:text-red-700">
//                     <FiArrowDown />
//                   </button>
//                 </td>
//                 <td className="p-3 text-red-500">{item.expiry}</td>
//                 <td className="p-3 flex gap-2">
//                   {editingItemId === item.id ? (
//                     <button onClick={() => saveQuantity(item.id)} className="text-green-500 hover:text-green-700">
//                       <FiCheck />
//                     </button>
//                   ) : (
//                     <button onClick={() => startEditing(item.id, item.quantity)} className="text-blue-500 hover:text-blue-700">
//                       <FiEdit />
//                     </button>
//                   )}
//                   <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700">
//                     <FiTrash2 />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Inventory;






import { useState } from "react";
import { FiEdit, FiTrash2, FiPlus, FiCheck, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { useInventory } from "../context/InventoryContext";

const Inventory = () => {
  const { inventory, addItem, deleteItem, startEditing, saveQuantity, adjustQuantity } = useInventory(); // Use the context hook
  const [newItem, setNewItem] = useState({ name: "", quantity: "", expiry: "" });
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddItem = () => {
    if (!newItem.name || !newItem.quantity || !newItem.expiry) return;
    addItem(newItem); // Call the addItem function from context
    setNewItem({ name: "", quantity: "", expiry: "" });
  };

  const handleStartEditing = (id, quantity) => {
    setEditingItemId(id);
    setEditedQuantity(quantity);
    startEditing(id, quantity); // Optional, if you want extra actions
  };

  const handleSaveQuantity = (id) => {
    saveQuantity(id, editedQuantity); // Call the saveQuantity function from context
    setEditingItemId(null);
  };

  const filteredItems = inventory
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => new Date(a.expiry) - new Date(b.expiry));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Inventory Management</h1>
      
      {/* Add New Item */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Item Name"
          className="p-2 border rounded-lg flex-1"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="p-2 border rounded-lg w-24"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          type="date"
          className="p-2 border rounded-lg"
          value={newItem.expiry}
          onChange={(e) => setNewItem({ ...newItem, expiry: e.target.value })}
        />
        <button onClick={handleAddItem} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FiPlus size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search items..."
        className="p-2 border rounded w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Inventory Table */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="p-3">Item</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Expiry Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className={`p-3 ${item.quantity <= 5 ? 'text-red-500' : ''}`}>{item.name}</td>
                <td className="p-3 flex items-center gap-2">
                  {editingItemId === item.id ? (
                    <input
                      type="number"
                      className="p-1 border rounded w-16"
                      value={editedQuantity}
                      onChange={(e) => setEditedQuantity(e.target.value)}
                    />
                  ) : (
                    item.quantity
                  )}
                  <button onClick={() => adjustQuantity(item.id, 1)} className="text-green-500 hover:text-green-700">
                    <FiArrowUp />
                  </button>
                  <button onClick={() => adjustQuantity(item.id, -1)} className="text-red-500 hover:text-red-700">
                    <FiArrowDown />
                  </button>
                </td>
                <td className="p-3 text-red-500">{item.expiry}</td>
                <td className="p-3 flex gap-2">
                  {editingItemId === item.id ? (
                    <button onClick={() => handleSaveQuantity(item.id)} className="text-green-500 hover:text-green-700">
                      <FiCheck />
                    </button>
                  ) : (
                    <button onClick={() => handleStartEditing(item.id, item.quantity)} className="text-blue-500 hover:text-blue-700">
                      <FiEdit />
                    </button>
                  )}
                  <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
