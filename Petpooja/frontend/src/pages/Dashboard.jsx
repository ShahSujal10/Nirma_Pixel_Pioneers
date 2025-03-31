// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { FiBox, FiTrash2, FiTrendingUp, FiBell, FiMoon, FiSun } from "react-icons/fi";
// import { FaUtensils, FaHandsHelping, FaChartPie, FaTrophy } from "react-icons/fa";
// import { useState } from "react";

// const Dashboard = () => {
//     const [darkMode, setDarkMode] = useState(false);

//     // Sample data for waste trends chart
//     const wasteData = [
//         { day: "Mon", waste: 5 },
//         { day: "Tue", waste: 4 },
//         { day: "Wed", waste: 6 },
//         { day: "Thu", waste: 3 },
//         { day: "Fri", waste: 7 },
//         { day: "Sat", waste: 4 },
//         { day: "Sun", waste: 5 },
//     ];

//     return (
//         <div className={`flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen`}>
//             {/* Main Content */}
//             <div className="flex-1 p-6">
//                 {/* Top Navbar */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h1 className="text-2xl font-bold">Dashboard</h1>
//                     <div className="flex items-center space-x-4">
//                         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                             Generate Report
//                         </button>
//                     </div>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-4 gap-6">
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiBox className="text-blue-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Total Inventory</h3>
//                             <p className="text-xl font-semibold">125 Items</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiTrash2 className="text-red-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Waste This Week</h3>
//                             <p className="text-xl font-semibold">18 Kg</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiTrendingUp className="text-green-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Predicted Waste</h3>
//                             <p className="text-xl font-semibold">15 Kg</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaUtensils className="text-yellow-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Optimized Dishes</h3>
//                             <p className="text-xl font-semibold">5 Specials</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaHandsHelping className="text-purple-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Donations This Week</h3>
//                             <p className="text-xl font-semibold">20 Kg</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaChartPie className="text-blue-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Cost Savings</h3>
//                             <p className="text-xl font-semibold">$250</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaTrophy className="text-orange-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Eco-Friendly Score</h3>
//                             <p className="text-xl font-semibold">89%</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiBell className="text-gray-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Alerts & Notifications</h3>
//                             <p className="text-xl font-semibold">3 Pending</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Waste Trend Chart */}
//                 <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
//                     <h3 className="text-lg font-semibold mb-4">Waste Trends This Week</h3>
//                     <ResponsiveContainer width="100%" height={250}>
//                         <LineChart data={wasteData}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="day" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line type="monotone" dataKey="waste" stroke="#ff0000" strokeWidth={3} />
//                         </LineChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;





// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { FiBox, FiTrash2, FiTrendingUp, FiBell, FiMoon, FiSun } from "react-icons/fi";
// import { FaUtensils, FaHandsHelping, FaChartPie, FaTrophy } from "react-icons/fa";
// import { useState } from "react";
// import { useInventory } from "../context/InventoryContext"; // Assuming useInventory is your custom hook

// const Dashboard = () => {
//     const [darkMode, setDarkMode] = useState(false);
    
//     // Access inventory from custom hook
//     const { inventory } = useInventory();  // Use the custom hook here instead of useContext

//     // Sample data for waste trends chart
//     const wasteData = [
//         { day: "Mon", waste: 5 },
//         { day: "Tue", waste: 4 },
//         { day: "Wed", waste: 6 },
//         { day: "Thu", waste: 3 },
//         { day: "Fri", waste: 7 },
//         { day: "Sat", waste: 4 },
//         { day: "Sun", waste: 5 },
//     ];

//     // Calculate total inventory items
//     const totalInventory = inventory.length;

//     return (
//         <div className={`flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen`}>
//             {/* Main Content */}
//             <div className="flex-1 p-6">
//                 {/* Top Navbar */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h1 className="text-2xl font-bold">Dashboard</h1>
//                     <div className="flex items-center space-x-4">
//                         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                             Generate Report
//                         </button>
//                         <button
//                             onClick={() => setDarkMode(!darkMode)}
//                             className="text-gray-500 hover:text-gray-700"
//                         >
//                             {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-4 gap-6">
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiBox className="text-blue-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Total Inventory</h3>
//                             <p className="text-xl font-semibold">{totalInventory} Items</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiTrash2 className="text-red-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Waste This Week</h3>
//                             <p className="text-xl font-semibold">18 Kg</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiTrendingUp className="text-green-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Predicted Waste</h3>
//                             <p className="text-xl font-semibold">15 Kg</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaUtensils className="text-yellow-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Optimized Dishes</h3>
//                             <p className="text-xl font-semibold">5 Specials</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaHandsHelping className="text-purple-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Donations This Week</h3>
//                             <p className="text-xl font-semibold">20 Kg</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaChartPie className="text-blue-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Cost Savings</h3>
//                             <p className="text-xl font-semibold">$250</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FaTrophy className="text-orange-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Eco-Friendly Score</h3>
//                             <p className="text-xl font-semibold">89%</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
//                         <FiBell className="text-gray-500 text-3xl" />
//                         <div>
//                             <h3 className="text-sm">Alerts & Notifications</h3>
//                             <p className="text-xl font-semibold">3 Pending</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Waste Trend Chart */}
//                 <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
//                     <h3 className="text-lg font-semibold mb-4">Waste Trends This Week</h3>
//                     <ResponsiveContainer width="100%" height={250}>
//                         <LineChart data={wasteData}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="day" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line type="monotone" dataKey="waste" stroke="#ff0000" strokeWidth={3} />
//                         </LineChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;






import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FiBox, FiTrash2, FiTrendingUp, FiBell, FiMoon, FiSun } from "react-icons/fi";
import { FaUtensils, FaHandsHelping, FaChartPie, FaTrophy } from "react-icons/fa";
import { useState } from "react";
import { useInventory } from "../context/InventoryContext"; // Assuming useInventory is your custom hook
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Access inventory from custom hook
    const { inventory } = useInventory(); // Use the custom hook here instead of useContext

    // Sample data for waste trends chart
    const wasteData = [
        { day: "Mon", waste: 5 },
        { day: "Tue", waste: 4 },
        { day: "Wed", waste: 6 },
        { day: "Thu", waste: 3 },
        { day: "Fri", waste: 7 },
        { day: "Sat", waste: 4 },
        { day: "Sun", waste: 5 },
    ];

    // Calculate total inventory items
    const totalInventory = inventory.length;

    // Initialize useNavigate hook
    const navigate = useNavigate();

    // Handle redirection to inventory page
    const handleTotalInventoryClick = () => {
        navigate("/app/inventory");
    };

    return (
        <div className={`flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen`}>
            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Top Navbar */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Generate Report
                        </button>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-6">
                    <div 
                        className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 cursor-pointer" 
                        onClick={handleTotalInventoryClick} // Add the onClick handler here
                    >
                        <FiBox className="text-blue-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Total Inventory</h3>
                            <p className="text-xl font-semibold">{totalInventory} Items</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
                        <FiTrash2 className="text-red-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Waste This Week</h3>
                            <p className="text-xl font-semibold">18 Kg</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
                        <FiTrendingUp className="text-green-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Predicted Waste</h3>
                            <p className="text-xl font-semibold">15 Kg</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
                        <FaUtensils className="text-yellow-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Optimized Dishes</h3>
                            <p className="text-xl font-semibold">5 Specials</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
                        <FaHandsHelping className="text-purple-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Donations This Week</h3>
                            <p className="text-xl font-semibold">20 Kg</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
                        <FaChartPie className="text-blue-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Cost Savings</h3>
                            <p className="text-xl font-semibold">$250</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
                        <FaTrophy className="text-orange-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Eco-Friendly Score</h3>
                            <p className="text-xl font-semibold">89%</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
                        <FiBell className="text-gray-500 text-3xl" />
                        <div>
                            <h3 className="text-sm">Alerts & Notifications</h3>
                            <p className="text-xl font-semibold">3 Pending</p>
                        </div>
                    </div>
                </div>

                {/* Waste Trend Chart */}
                <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Waste Trends This Week</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={wasteData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="waste" stroke="#ff0000" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
