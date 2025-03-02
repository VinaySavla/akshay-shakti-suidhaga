import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex gap-4 p-4 bg-white shadow-md fixed top-0 w-full justify-center">
            <Link to="/" className="text-white rounded-md hover:bg-gray-800">
                <img src="/logo.webp" alt="Akshay Shakti Logo" width={50} height={50} className="rounded-lg" />
            </Link>
            <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Login
            </Link>
            <Link to="/marketplace" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Marketplace
            </Link>
            <Link to="/students" className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                Student Dashboard
            </Link>
            <Link to="/attendance" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                Attendance
            </Link>
        </nav>
    );
}
