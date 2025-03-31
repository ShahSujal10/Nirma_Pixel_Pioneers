import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { FiTrash2, FiDollarSign, FiBarChart2 } from "react-icons/fi";

const weeklyWasteData = [
  { day: "Mon", waste: 5 },
  { day: "Tue", waste: 6 },
  { day: "Wed", waste: 4 },
  { day: "Thu", waste: 7 },
  { day: "Fri", waste: 3 },
  { day: "Sat", waste: 6 },
  { day: "Sun", waste: 5 },
];

const monthlyWasteData = [
  { week: "Week 1", waste: 20 },
  { week: "Week 2", waste: 25 },
  { week: "Week 3", waste: 18 },
  { week: "Week 4", waste: 22 },
];

const pieChartData = [
  { name: "Vegetables", value: 35 },
  { name: "Dairy", value: 25 },
  { name: "Meat", value: 20 },
  { name: "Fruits", value: 20 },
];

const COLORS = ["#ff4d4d", "#ffcc00", "#4caf50", "#007bff"];

const WasteAnalysis = () => {
  const [selectedView, setSelectedView] = useState("weekly");

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Waste Analysis</h1>
        </div>

        {/* Waste Summary Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
            <FiTrash2 className="text-red-500 text-3xl" />
            <div>
              <h3 className="text-gray-600 text-sm">Total Waste</h3>
              <p className="text-xl font-semibold">42 Kg</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
            <FiBarChart2 className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-gray-600 text-sm">Waste Trend</h3>
              <p className="text-xl font-semibold">
                {selectedView === "weekly" ? "Weekly Data" : "Monthly Data"}
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
            <FiDollarSign className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-gray-600 text-sm">Financial Impact</h3>
              <p className="text-xl font-semibold">$210 Lost</p>
            </div>
          </div>
        </div>

        {/* Waste Trend Chart - Toggle Between Weekly & Monthly */}
        <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700 text-lg font-semibold">Waste Trends</h3>
            <select
              className="p-2 border rounded"
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            {selectedView === "weekly" ? (
              <BarChart data={weeklyWasteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="waste" fill="#ff0000" />
              </BarChart>
            ) : (
              <BarChart data={monthlyWasteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="waste" fill="#007bff" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Waste Category Pie Chart */}
        <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-gray-700 text-lg font-semibold mb-4">Waste Category Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WasteAnalysis;
