
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import { signup } from "../auth/auth"; // Assuming signup function handles the API call

// const Signup = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate(); // Initialize useNavigate for redirect

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             setMessage("Signup in progress...");

//             // Make API call for signup
//             await signup(name, email, password);
            
//             // On success, show a success message and redirect to login page
//             setMessage("Signup successful! Redirecting to login...");

//             // Redirect after 1.5 seconds
//             setTimeout(() => {
//                 navigate("/login"); // Navigate to the login page
//             }, 1500); // Delay of 1.5 seconds before redirecting
//         } catch (error) {
//             console.error("Error during signup:", error);
//             setMessage("Error during signup. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={handleSignup}>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Name"
//                     required
//                 />
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                     required
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                     required
//                 />
//                 <button type="submit">Signup</button>
//             </form>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default Signup;












import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { signup } from '../auth/auth'; // Assuming signup function handles the API call

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirect

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setMessage('Signup in progress...');

      // Make API call for signup
      await signup(name, email, password);
      
      // On success, show a success message and redirect to login page
      setMessage('Signup successful! Redirecting to login...');
      
      // Redirect after 1.5 seconds
      setTimeout(() => {
        navigate('/login'); // Navigate to the login page
      }, 1500); // Delay of 1.5 seconds before redirecting
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Error during signup. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Signup Form Container */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.h2
          className="text-2xl font-semibold text-center text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Create a New Account
        </motion.h2>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          {/* Name Input */}
          <motion.input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          />

          {/* Email Input */}
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          {/* Password Input */}
          <motion.input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />

          {/* Signup Button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Signup
          </motion.button>
        </form>

        {/* Feedback Message */}
        {message && (
          <motion.p
            className={`mt-4 text-center text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {message}
          </motion.p>
        )}

        {/* Login Link */}
        <motion.div
          className="mt-6 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
