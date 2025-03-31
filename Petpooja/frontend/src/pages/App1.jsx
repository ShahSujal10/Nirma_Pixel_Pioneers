import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx"; // New Landing Page
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory";
import WasteAnalysis from "./pages/WasteAnalysis";
import RecipesSuggestions from "./pages/RecipeSuggestions.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page as default */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Main App Layout */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="waste-analysis" element={<WasteAnalysis />} />
          <Route path="recipes" element={<RecipesSuggestions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
