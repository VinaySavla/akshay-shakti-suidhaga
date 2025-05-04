import { useState } from "react";
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
import BasicTailoring from "./pages/BasicTailoring";
import AdvancedTailoring from "./pages/AdvancedTailoring";
import BusinessSkills from "./pages/BusinessSkills";

function App() {
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

      {/* Program Routes */}
      <Route path="/programs/basic" element={<BasicTailoring />} />
      <Route path="/programs/advanced" element={<AdvancedTailoring />} />
      <Route path="/programs/business" element={<BusinessSkills />} />
    </Routes>
  );
}

export default App;
