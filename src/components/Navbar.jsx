import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-slate-50 shadow-sm fixed top-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src="/logo.webp" alt="Akshay Shakti Logo" width={50} height={50} className="rounded-lg" />
                        </Link>
                    </div>

                    {/* Right side - Navigation Links */}
                    <div className="flex items-center space-x-6">
                        <Link to="/marketplace" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Marketplace
                        </Link>
                        <Link to="/students" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Student Dashboard
                        </Link>
                        <Link to="/attendance" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Attendance
                        </Link>
                        <Link to="/login" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                            Login/Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}