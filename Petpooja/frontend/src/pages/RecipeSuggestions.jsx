import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";

const RecipesSuggestions = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen p-6 flex-col items-center">
      <motion.h1 className="text-3xl font-bold text-gray-800 mb-6" animate={{ scale: 1.1 }}>
        Dynamic Recipe Suggestions
      </motion.h1>
      
      {/* Search Bar */}
      <div className="flex items-center space-x-3 mb-6">
        <input
          type="text"
          placeholder="Search Recipe"
          className="px-4 py-2 border rounded-lg focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={fetchRecipes}
        >
          <FiSearch />
        </button>
      </div>

      {/* Recipes List */}
      {loading ? (
        <p className="text-center text-gray-600">Loading recipes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {recipes.map((recipe) => (
            <motion.div 
              key={recipe.idMeal} 
              className="bg-white p-4 rounded-xl shadow-md flex flex-col space-y-2 items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaUtensils className="text-yellow-500 text-3xl" />
              <h3 className="text-lg font-semibold text-gray-700">{recipe.strMeal}</h3>
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-full h-40 object-cover rounded-lg" 
              />
              <button
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={() => setSelectedRecipe(recipe)}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h2 className="text-xl font-bold mb-4">{selectedRecipe.strMeal}</h2>
            <img 
              src={selectedRecipe.strMealThumb} 
              alt={selectedRecipe.strMeal} 
              className="w-full h-60 object-cover rounded-lg mb-4" 
            />
            <p className="text-gray-700">{selectedRecipe.strInstructions}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setSelectedRecipe(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RecipesSuggestions;