import { Link } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <Link to="/admin/products" className="bg-blue-500 text-white py-6 rounded-lg shadow hover:bg-blue-600">
                        Manage Products
                    </Link>
                    <Link to="/admin/students" className="bg-green-500 text-white py-6 rounded-lg shadow hover:bg-green-600">
                        Manage Students
                    </Link>
                    <Link to="/admin/batches" className="bg-purple-500 text-white py-6 rounded-lg shadow hover:bg-purple-600">
                        Manage Classes & Batches
                    </Link>
                </div>
            </div>
        </div>
    );
}
