import { BASE_URL } from "@/constants";
import { FormEventHandler, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  // const navigate = useNavigate();
  const from = location.state?.from;

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    console.log(from);
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorMsg = await response.text();
        console.error("Login failed:", errorMsg);
        return;
      }
      console.log(response)

      // const { token } = await response.json();
      // localStorage.setItem("token", token);
    } catch (err) {
      console.error("Network or server error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-sm mx-auto mt-10"
    >
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}
