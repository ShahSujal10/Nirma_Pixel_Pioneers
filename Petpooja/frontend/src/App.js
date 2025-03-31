// import React, { useState, useEffect } from "react";
// import Login from "./components/Login.js";
// import Signup from "./components/Signup.js";
// import Dashboard from "./components/Dashboard.js"; // Make sure Dashboard exists

// function App() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         // Check for token on initial load
//         const token = localStorage.getItem("token");
//         if (token) {
//             setIsLoggedIn(true);
//         }
//     }, []);

//     // Logout function
//     const handleLogout = () => {
//         localStorage.removeItem("token"); // Remove JWT token
//         setIsLoggedIn(false);
//     };

//     return (
//         <div>
//             <h1>JWT Authentication</h1>
//             {isLoggedIn ? (
//                 <div>
//                     <p>✅ You are logged in!</p>
//                     <Dashboard  setIsLoggedIn={setIsLoggedIn} />
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             ) : (
//                 <>
//                     <Login setIsLoggedIn={setIsLoggedIn} />
//                     <Signup />
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;






// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import Layout from "./pages/Layout.jsx";
// import LandingPage from "./pages/LandingPage.jsx"; // New Landing Page
// import Dashboard from "./pages/Dashboard.jsx";
// import Inventory from "./pages/Inventory";
// import WasteAnalysis from "./pages/WasteAnalysis";
// import RecipesSuggestions from "./pages/RecipeSuggestions.jsx";
// import Login from "./components/Login.js";
// import Signup from "./components/Signup.js";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check for token on initial load
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove JWT token
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Landing Page as default */}
//         <Route path="/" element={<LandingPage />} />

//         {/* If not logged in, show login and signup */}
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Main App Layout (Requires Login) */}
//         <Route 
//           path="/app" 
//           element={isLoggedIn ? <Layout /> : <Navigate to="/login" />} // Redirect to login if not logged in
//         >
//           <Route index element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="inventory" element={<Inventory />} />
//           <Route path="waste-analysis" element={<WasteAnalysis />} />
//           <Route path="recipes" element={<RecipesSuggestions />} />
//         </Route>

//         {/* Catch-all for undefined routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import Layout from "./pages/Layout.jsx";
// import LandingPage from "./pages/LandingPage.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Inventory from "./pages/Inventory";
// import WasteAnalysis from "./pages/WasteAnalysis";
// import RecipesSuggestions from "./pages/RecipeSuggestions.jsx";
// import Login from "./components/Login.js";
// import Signup from "./components/Signup.js";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check for token on initial load
//     const token = localStorage.getItem("token");
//     console.log("Hii : "+token)
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove JWT token
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* If logged in, redirect to dashboard; otherwise, show LandingPage */}
//         <Route path="/" element={isLoggedIn ? <Navigate to="/app" /> : <LandingPage />} />

//         {/* If not logged in, show login and signup */}
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Main App Layout (Requires Login) */}
//         <Route
//           path="/app"
//           element={isLoggedIn ? <Layout /> : <Navigate to="/" />} // Redirect to landing page if not logged in
//         >
//           <Route index element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="inventory" element={<Inventory />} />
//           <Route path="waste-analysis" element={<WasteAnalysis />} />
//           <Route path="recipes" element={<RecipesSuggestions />} />
//         </Route>

//         {/* Catch-all for undefined routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );

// }

// export default App;









import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./pages/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory";
import WasteAnalysis from "./pages/WasteAnalysis";
import RecipesSuggestions from "./pages/RecipeSuggestions.jsx";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { InventoryProvider } from "./context/InventoryContext.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token on initial load
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT token
    setIsLoggedIn(false);
  };

  return (
    <InventoryProvider>
      <Router>
        <Routes>
          {/* If logged in, redirect to dashboard; otherwise, show LandingPage */}
          <Route path="/" element={isLoggedIn ? <Navigate to="/app" /> : <LandingPage />} />

          {/* If not logged in, show login and signup */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Main App Layout (Requires Login) */}
          <Route
            path="/app"
            element={isLoggedIn ? <Layout setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} // Redirect to landing page if not logged in
          >
            <Route index element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="waste-analysis" element={<WasteAnalysis />} />
            <Route path="recipes" element={<RecipesSuggestions />} />
          </Route>

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </InventoryProvider>
  );
}

export default App;
