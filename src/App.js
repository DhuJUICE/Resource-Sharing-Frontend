import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import NewPassword from "./components/new-password";
import PasswordReset from "./components/reset-password";
import ResetPasswordCode from "./components/reset-password-code";

import ResourceSearch from "./components/resource-search";
import SubjectView from "./components/subject-view";
import UploadTaggingResource from "./components/file-upload-tagging";
import ResourceReport from "./components/resource-report";
import RateResource from "./components/rate-resource";
import ModerationForm from "./components/moderation";
import UpdateUserRole from "./components/update-user-role";
import Analytics from "./components/analytics";
import Contributors from "./components/contributors";
import FAQ from "./components/faq";
import AboutUs from "./components/about-us";

// Layout Components
import Header from "./components/sectionComponents/header";
import Footer from "./components/sectionComponents/footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const userRole = localStorage.getItem("userRole");
    if (username && userRole) {
      setUser({ username, userRole });
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className="App">
      <Router>
        <Header user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-password-page" element={<NewPassword />} />
          <Route path="/reset-password-page" element={<PasswordReset />} />
          <Route
            path="/reset-code"
            element={<ResetPasswordCode email="user@example.com" />}
          />

          <Route path="/resource-search-page" element={<ResourceSearch />} />
          <Route path="/subject-view-page" element={<SubjectView />} />
          <Route path="/file-upload-page" element={<UploadTaggingResource />} />
          <Route path="/resource-report-page" element={<ResourceReport />} />
          <Route path="/rate-resource-page" element={<RateResource />} />
          <Route path="/moderate-page" element={<ModerationForm />} />
          <Route path="/update-role-page" element={<UpdateUserRole />} />
          <Route path="/analytics-page" element={<Analytics />} />

          <Route path="/contributors-page" element={<Contributors />} />
          <Route path="/faq-page" element={<FAQ />} />
          <Route path="/about-us-page" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
