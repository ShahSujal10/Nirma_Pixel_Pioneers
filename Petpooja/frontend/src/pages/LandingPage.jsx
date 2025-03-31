
// import { Link } from "react-router-dom";
// import { FaUtensils, FaLeaf, FaRecycle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="w-full p-5 bg-gradient-to-r from-green-600 to-blue-600 text-white flex justify-between items-center shadow-md">
//         <h1 className="text-3xl font-bold">Smart Kitchen</h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex flex-col items-center justify-center flex-1 text-center p-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl font-bold text-gray-800 mb-4"
//         >
//           🌱 Smart Kitchen Management
//         </motion.h1>
//         <p className="text-lg text-gray-700 max-w-2xl mb-8">
//           Optimize your inventory, minimize waste, and get AI-powered recipe suggestions.
//         </p>

//         {/* Features */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
//           {[
//             { icon: FaUtensils, text: "Recipe Suggestions" },
//             { icon: FaLeaf, text: "Smart Inventory" },
//             { icon: FaRecycle, text: "Waste Analysis" }
//           ].map(({ icon: Icon, text }, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
//             >
//               <Icon className="text-5xl text-green-600" />
//               <p className="mt-3 font-semibold text-gray-800">{text}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex space-x-4">
//           {/* Get Started Button */}
//           {/* <motion.div whileHover={{ scale: 1.1 }}>
//             <Link to="/app">
//               <button className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transition">
//                 Get Started 🚀
//               </button>
//             </Link>
//           </motion.div> */}

//           {/* Login Button */}
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link to="/login">
//               <button className="px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transition">
//                 Login
//               </button>
//             </Link>
//           </motion.div>

//           {/* Signup Button */}
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link to="/signup">
//               <button className="px-6 py-3 bg-yellow-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-yellow-700 transition">
//                 Signup
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="w-full p-4 bg-gray-800 text-white text-center mt-12">
//         <p>&copy; {new Date().getFullYear()} Smart Kitchen. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;






// import { Link } from "react-router-dom";
// import { FaUtensils, FaLeaf, FaRecycle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="w-full p-5 bg-gradient-to-r from-green-600 to-blue-600 text-white flex justify-between items-center shadow-lg sticky top-0 z-50">
//         <h1 className="text-3xl font-bold">Smart Kitchen</h1>
//         <nav className="space-x-6">
//           <Link to="/about" className="hover:text-gray-300">About</Link>
//           <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//           <Link to="/blog" className="hover:text-gray-300">Blog</Link>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="flex flex-col items-center justify-center flex-1 text-center p-8 bg-gradient-to-r from-green-100 to-blue-100">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl font-extrabold text-gray-800 mb-6"
//         >
//           🌱 Smart Kitchen Management
//         </motion.h1>
//         <p className="text-lg text-gray-700 max-w-3xl mb-8">
//           Optimize your inventory, minimize waste, and get AI-powered recipe suggestions—all in one platform!
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex space-x-6">
//           {/* Login Button */}
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link to="/login">
//               <button className="px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-green-700 transition">
//                 Login
//               </button>
//             </Link>
//           </motion.div>

//           {/* Signup Button */}
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link to="/signup">
//               <button className="px-8 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-700 transition">
//                 Signup
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </main>

//       {/* Features Section */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//           Features You’ll Love
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
//           {[{
//             icon: FaUtensils,
//             text: "Recipe Suggestions",
//             description: "Get personalized recipe suggestions based on what ingredients you have at home."
//           }, {
//             icon: FaLeaf,
//             text: "Smart Inventory",
//             description: "Track your ingredients and receive reminders when you’re running low on items."
//           }, {
//             icon: FaRecycle,
//             text: "Waste Analysis",
//             description: "Minimize waste with intelligent analysis of your food consumption patterns."
//           }].map(({ icon: Icon, text, description }, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform"
//             >
//               <Icon className="text-5xl text-green-600 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
//               <p className="text-gray-600 text-center">{description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-gray-100">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">What Our Users Say</h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg"
//           >
//             <p className="italic text-gray-700 mb-4">
//               "Smart Kitchen has revolutionized the way we manage our ingredients and minimize food waste!"
//             </p>
//             <p className="font-semibold text-gray-800">John Doe</p>
//             <p className="text-gray-500">Home Chef</p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg"
//           >
//             <p className="italic text-gray-700 mb-4">
//               "Thanks to Smart Kitchen, I no longer waste food. The recipe suggestions are spot on!"
//             </p>
//             <p className="font-semibold text-gray-800">Jane Smith</p>
//             <p className="text-gray-500">Food Blogger</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="w-full p-6 bg-gray-800 text-white text-center mt-12">
//         <div className="space-y-4">
//           <p>&copy; {new Date().getFullYear()} Smart Kitchen. All rights reserved.</p>
//           <div className="flex justify-center gap-6">
//             <Link to="/about" className="hover:text-gray-400">About</Link>
//             <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//             <Link to="/blog" className="hover:text-gray-400">Blog</Link>
//           </div>
//           <div className="flex justify-center gap-6 mt-4">
//             <a href="#" className="text-white hover:text-gray-400">Facebook</a>
//             <a href="#" className="text-white hover:text-gray-400">Twitter</a>
//             <a href="#" className="text-white hover:text-gray-400">Instagram</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;






import { Link } from "react-router-dom";
import { FaUtensils, FaLeaf, FaRecycle, FaHandshake, FaPhone, FaInfoCircle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <header className="w-full p-5 bg-gradient-to-r from-green-600 to-blue-600 text-white flex justify-between items-center shadow-lg sticky top-0 z-50">
        <h1 className="text-3xl font-bold">Smart Kitchen</h1>
        
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center p-8 bg-gradient-to-r from-green-100 to-blue-100 py-[100px]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-gray-800 mb-6"
        >
          🌱 Smart Kitchen Management
        </motion.h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          Optimize your inventory, minimize waste, and get AI-powered recipe suggestions—all in one platform!
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-6">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/login">
              <button className="px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-green-700 transition">
                Login
              </button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/signup">
              <button className="px-8 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-700 transition">
                Signup
              </button>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Features You’ll Love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {[{
            icon: FaUtensils,
            text: "Recipe Suggestions",
            description: "Get personalized recipe suggestions based on what ingredients you have at home."
          }, {
            icon: FaLeaf,
            text: "Smart Inventory",
            description: "Track your ingredients and receive reminders when you’re running low on items."
          }, {
            icon: FaRecycle,
            text: "Waste Analysis",
            description: "Minimize waste with intelligent analysis of your food consumption patterns."
          }].map(({ icon: Icon, text, description }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform"
            >
              <Icon className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
              <p className="text-gray-600 text-center">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {[{
            step: "Step 1: Sign Up",
            description: "Create an account and start managing your kitchen inventory."
          }, {
            step: "Step 2: Add Ingredients",
            description: "Add ingredients you have at home to get personalized recipe suggestions."
          }, {
            step: "Step 3: Minimize Waste",
            description: "Receive insights on how to reduce food waste based on your usage."
          }].map(({ step, description }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform"
            >
              <FaHandshake className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{step}</h3>
              <p className="text-gray-600 text-center">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Pricing Plans</h2>
        <div className="flex justify-center gap-12">
          <div className="w-80 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Free Plan</h3>
            <p className="text-lg text-gray-700 mb-4">Get started with basic inventory management and recipe suggestions.</p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Up to 50 Ingredients</li>
              <li>Basic Recipe Suggestions</li>
              <li>Email Support</li>
            </ul>
            <Link to="/signup">
              <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition">
                Start Free Trial
              </button>
            </Link>
          </div>
          <div className="w-80 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-lg text-gray-700 mb-4">Unlock all features, including advanced waste analysis and unlimited recipes.</p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Unlimited Ingredients</li>
              <li>Advanced Recipe Suggestions</li>
              <li>Priority Support</li>
            </ul>
            <Link to="/signup">
              <button className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-700 transition">
                Get Premium
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[{
            question: "How do I add ingredients?",
            answer: "Simply scan the barcode or input ingredients manually through the app."
          }, {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription anytime through your account settings."
          }, {
            question: "Do you provide international shipping?",
            answer: "Currently, we only provide service within the United States."
          }].map(({ question, answer }, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{question}</h3>
              <p className="text-gray-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-6 bg-gray-800 text-white text-center mt-12">
        <div className="space-y-4">
          <p>&copy; {new Date().getFullYear()} Smart Kitchen. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            <Link to="/blog" className="hover:text-gray-400">Blog</Link>
            <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-400"><FaFacebook /></a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400"><FaInstagram /></a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400"><FaLinkedin /></a>
            <a href="https://github.com" className="text-white hover:text-gray-400"><FaGithub /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
