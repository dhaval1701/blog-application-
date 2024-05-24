import React, { useState } from "react";
import { useAuth } from "AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Add state for name

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await signup(email, password, name); // Pass name to signup function
      if (user) {
        navigate("/authorform");
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSignup}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
