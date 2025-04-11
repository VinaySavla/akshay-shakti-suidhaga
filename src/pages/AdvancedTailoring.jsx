import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AdvancedTailoring() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <div className="pt-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-6 inline-flex items-center">
                            <span className="mr-2">←</span> Back to Home
                        </Link>
                        
                        {/* Header */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced Design & Tailoring Program</h1>
                        <p className="text-xl text-gray-600 mb-8">Take your tailoring skills to the professional level with advanced techniques and design principles.</p>

                        {/* Prerequisites Card */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                            <h2 className="text-lg font-semibold text-yellow-800 mb-2">Prerequisites</h2>
                            <p className="text-yellow-700">Completion of Basic Tailoring course or equivalent experience in garment construction.</p>
                        </div>

                        {/* Course Overview */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Overview</h2>
                            <p className="text-gray-600 mb-6">
                                Our 6-month advanced program focuses on complex pattern making, haute couture techniques, 
                                and contemporary design principles. You'll develop the skills needed to create professional-grade 
                                garments and establish your fashion business.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Duration</h3>
                                    <p className="text-gray-600">6 Months</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Class Size</h3>
                                    <p className="text-gray-600">Maximum 10 students</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Skill Level</h3>
                                    <p className="text-gray-600">Advanced</p>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Techniques */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Advanced Techniques You'll Master</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Complex pattern modifications",
                                    "Couture hand-sewing techniques",
                                    "Advanced draping methods",
                                    "Professional fitting adjustments",
                                    "Specialized fabric handling",
                                    "Advanced embellishment techniques",
                                    "Fashion collection development",
                                    "Digital pattern making",
                                    "Specialized garment construction",
                                    "Advanced textile knowledge"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Curriculum */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Detailed Curriculum</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        month: "Months 1-2",
                                        title: "Advanced Pattern Making",
                                        topics: "Complex modifications, grading, digitalization"
                                    },
                                    {
                                        month: "Months 3-4",
                                        title: "Couture Techniques",
                                        topics: "Hand-sewing, draping, specialized construction"
                                    },
                                    {
                                        month: "Month 5",
                                        title: "Fashion Design",
                                        topics: "Collection development, trend analysis, styling"
                                    },
                                    {
                                        month: "Month 6",
                                        title: "Professional Practice",
                                        topics: "Portfolio development, final collection, business planning"
                                    }
                                ].map((phase, index) => (
                                    <div key={index} className="border-l-4 border-indigo-500 pl-4">
                                        <h3 className="font-semibold text-gray-800">{phase.month}: {phase.title}</h3>
                                        <p className="text-gray-600">{phase.topics}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Career Opportunities */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Opportunities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Fashion Designer",
                                    "Pattern Making Specialist",
                                    "Boutique Owner",
                                    "Costume Designer",
                                    "Fashion Consultant",
                                    "Custom Tailor"
                                ].map((career, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="text-gray-700">{career}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-indigo-50 rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Advance Your Skills?</h2>
                            <p className="text-gray-600 mb-6">Take your tailoring career to the next level with our advanced program.</p>
                            <div className="flex justify-center gap-4">
                                <Link 
                                    to="/signup" 
                                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 
                                             transform hover:scale-105 transition duration-300 shadow-md"
                                >
                                    Apply Now
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg 
                                             hover:bg-indigo-50 transition duration-300"
                                >
                                    Request Information
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}