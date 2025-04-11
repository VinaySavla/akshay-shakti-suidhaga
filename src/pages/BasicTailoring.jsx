import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BasicTailoring() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <div className="pt-20 pb-16">
                {/* Header Section */}
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-6 inline-flex items-center">
                            <span className="mr-2">←</span> Back to Home
                        </Link>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Basic Tailoring Program</h1>
                        <p className="text-xl text-gray-600 mb-8">Master the fundamentals of garment construction and sewing techniques.</p>
                        
                        {/* Course Overview */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Overview</h2>
                            <p className="text-gray-600 mb-6">
                                Our comprehensive 3-month basic tailoring program is designed for beginners who want to 
                                learn professional sewing skills. You'll learn everything from basic stitching to creating 
                                complete garments under expert guidance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Duration</h3>
                                    <p className="text-gray-600">3 Months</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Class Size</h3>
                                    <p className="text-gray-600">Maximum 15 students</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Skill Level</h3>
                                    <p className="text-gray-600">Beginner Friendly</p>
                                </div>
                            </div>
                        </div>

                        {/* What You'll Learn */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">What You'll Learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Basic hand stitching techniques",
                                    "Machine operation and maintenance",
                                    "Fabric selection and preparation",
                                    "Taking body measurements",
                                    "Pattern making fundamentals",
                                    "Garment construction basics",
                                    "Simple alterations and repairs",
                                    "Basic embroidery techniques"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                        </svg>
                                        <span className="text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Schedule */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Course Schedule</h2>
                            <div className="space-y-4">
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Month 1: Foundation</h3>
                                    <p className="text-gray-600">Basic stitching, machine operation, and fabric basics</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Month 2: Pattern Making</h3>
                                    <p className="text-gray-600">Measurements, pattern creation, and basic alterations</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Month 3: Garment Construction</h3>
                                    <p className="text-gray-600">Complete garment creation and finishing techniques</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-indigo-50 rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
                            <p className="text-gray-600 mb-6">Join our next batch and learn professional tailoring skills.</p>
                            <div className="flex justify-center gap-4">
                                <Link 
                                    to="/signup" 
                                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 
                                             transform hover:scale-105 transition duration-300 shadow-md"
                                >
                                    Enroll Now
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg 
                                             hover:bg-indigo-50 transition duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}