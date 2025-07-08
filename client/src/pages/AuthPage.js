import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    const payload = isLogin
      ? { email: form.email, password: form.password }
      : form;

    console.log("Sending to:", endpoint);
    console.log("Payload:", payload);

    const res = await axios.post(endpoint, payload);

    if (isLogin) {
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.success("Registration successful! Please log in.");
      setIsLogin(true);
    }
  } catch (err) {
    toast.error(err.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us, please login with your personal info</p>
          <button className="switch-btn" onClick={() => setIsLogin(true)}>Sign In</button>
        </div>

        <div className="auth-right">
          <h2>{isLogin ? "Login" : "Create Account"}</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Register" : " Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
