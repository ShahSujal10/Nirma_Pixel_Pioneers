import axios from "axios";

export const login = async (email, password) => {
    const res = await axios.post("http://localhost:5000/login", { email, password });
    localStorage.setItem("token", res.data.token);  // Save JWT
    return res.data;
};

export const signup = async (name, email, password) => {
    const res = await axios.post("http://localhost:5000/signup", { name, email, password });
    localStorage.setItem("token", res.data.token);  // Save JWT
    return res.data;
};

export const getUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const res = await axios.get("http://localhost:5000/me", {
            headers: { Authorization: token },
        });
        return res.data;
    } catch {
        return null;
    }
};

export const logout = () => {
    localStorage.removeItem("token");
};
