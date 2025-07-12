import React, { useState } from "react";
import { API_URL } from "./apiComponents/api-base-url";
import "./style.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username_or_email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username_or_email) newErrors.username_or_email = "Required";
    if (!formData.password) newErrors.password = "Required";
    return newErrors;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    try {
      const tokenResponse = await fetch(`${API_URL}/api/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username_or_email,
          password: formData.password,
        }),
      });

      if (!tokenResponse.ok) throw new Error("Invalid username or password");

      const { access, refresh } = await tokenResponse.json();
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("username", formData.username_or_email);

      const roleResponse = await fetch(`${API_URL}/api/role`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access}`,
        },
      });

      if (!roleResponse.ok) throw new Error("Failed to get user role");

      const { userRole } = await roleResponse.json();
      localStorage.setItem("userRole", userRole);

      onLogin({ username: formData.username_or_email, userRole, access, refresh });
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className="pageContainer">
      <main className="mainContent">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit} className="form">
          <input
            type="text"
            name="username_or_email"
            placeholder="Username or Email"
            value={formData.username_or_email}
            onChange={handleInputChange}
            className="input"
          />
          {errors.username_or_email && (
            <p className="errorText">{errors.username_or_email}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
          {errors.password && <p className="errorText">{errors.password}</p>}
          <input type="submit" value="Login" className="submitButton" />
          {error && <p className="errorText">{error}</p>}
        </form>
      </main>
    </div>
  );
};

export default Login;
