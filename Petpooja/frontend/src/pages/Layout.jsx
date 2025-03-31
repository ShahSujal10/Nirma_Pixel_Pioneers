
// import { NavLink, Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md h-screen p-5">
//         <h2 className="text-xl font-bold text-gray-700 mb-6">Smart Kitchen</h2>
//         <ul className="space-y-4">
//           <li>
//             <NavLink to="/app" className="text-gray-700 font-medium hover:text-blue-500">Dashboard</NavLink>
//           </li>
//           <li>
//             <NavLink to="/app/inventory" className="text-gray-700 font-medium hover:text-blue-500">Inventory</NavLink>
//           </li>
//           <li>
//             <NavLink to="/app/waste-analysis" className="text-gray-700 font-medium hover:text-blue-500">Waste Analysis</NavLink>
//           </li>
//           <li>
//             <NavLink to="/app/recipes" className="text-gray-700 font-medium hover:text-blue-500">Recipes</NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <Outlet /> {/* This will render the current page content */}
//       </div>
//     </div>
//   );
// };

// export default Layout;








import { NavLink, Outlet } from "react-router-dom";

const Layout = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");  // Remove JWT token from localStorage
    setIsLoggedIn(false);  // Update the state to reflect the logout
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md h-screen p-5">
        <h2 className="text-xl font-bold text-gray-700 mb-6">Smart Kitchen</h2>
        <ul className="space-y-4">
          <li>
            <NavLink to="/app" className="text-gray-700 font-medium hover:text-blue-500">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/app/inventory" className="text-gray-700 font-medium hover:text-blue-500">Inventory</NavLink>
          </li>
          <li>
            <NavLink to="/app/waste-analysis" className="text-gray-700 font-medium hover:text-blue-500">Waste Analysis</NavLink>
          </li>
          <li>
            <NavLink to="/app/recipes" className="text-gray-700 font-medium hover:text-blue-500">Recipes</NavLink>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This will render the current page content */}
      </div>
    </div>
  );
};

export default Layout;
