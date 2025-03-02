import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import StudentDashboard from "./pages/StudentDashboard";
import Attendance from "./pages/Attendance";
import { Route, Router, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageStudents from "./pages/admin/ManageStudents";
import ManageBatches from "./pages/admin/ManageBatches";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/students" element={<StudentDashboard />} />
      <Route path="/attendance" element={<Attendance />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<ManageProducts />} />
      <Route path="/admin/students" element={<ManageStudents />} />
      <Route path="/admin/batches" element={<ManageBatches />} />
    </Routes>
  );
}

export default App;
