import { Link } from "react-router-dom";

export default function AdminNavbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-lg font-bold">Admin Panel</h1>
                <div className="space-x-4">
                    <Link to="/admin" className="hover:underline">Dashboard</Link>
                    <Link to="/admin/products" className="hover:underline">Products</Link>
                    <Link to="/admin/students" className="hover:underline">Students</Link>
                    <Link to="/admin/batches" className="hover:underline">Batches</Link>
                </div>
            </div>
        </nav>
    );
}
