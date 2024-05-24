// src/components/LoginForm.js
import { auth } from "firebase";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "AuthContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      console.log(user);
      if (user) {
        navigate("/authorform");
      }

      console.log(user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LogIn;
