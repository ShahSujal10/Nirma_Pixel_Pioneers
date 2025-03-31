    import React, { useState } from "react";
    import axios from "axios";
    import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

    function Login({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post("http://localhost:5000/login", formData);
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        setIsLoggedIn(true);
        
        // Redirect to the main page (Dashboard)
        navigate("/app"); // Redirect to '/app' which will show the Dashboard
        } catch (error) {
        console.error("Error during login:", error.response?.data || error.message);
        alert("Error during login");
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            />
            <button type="submit">Login</button>
        </form>
        </div>
    );
    }

    export default Login;

