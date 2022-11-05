import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LogInHome from "./LogInHome";
import Dashboard from "./admin-panel/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkOnProgress from "./WorkOnProgress";
import Community from "./components/community/Community";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LogInHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<WorkOnProgress />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
