import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BusinessSkills() {
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Skills for Tailoring</h1>
                        <p className="text-xl text-gray-600 mb-8">Transform your tailoring skills into a successful business venture.</p>

                        {/* Course Overview */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Overview</h2>
                            <p className="text-gray-600 mb-6">
                                Our 3-month business skills program is designed to help tailors and fashion entrepreneurs 
                                establish and grow their businesses. Learn essential business management, marketing, 
                                and financial skills specific to the tailoring industry.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Duration</h3>
                                    <p className="text-gray-600">3 Months</p>
                                </div>
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Format</h3>
                                    <p className="text-gray-600">Hybrid (Online & In-person)</p>
                                </div>
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Requirements</h3>
                                    <p className="text-gray-600">Basic tailoring knowledge</p>
                                </div>
                            </div>
                        </div>

                        {/* Key Business Skills */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Business Skills You'll Learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Business plan development",
                                    "Financial management & pricing",
                                    "Marketing & branding",
                                    "Customer service excellence",
                                    "Digital presence & social media",
                                    "Inventory management",
                                    "Legal & regulatory compliance",
                                    "Team management",
                                    "Quality control systems",
                                    "Growth strategies"
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                        </svg>
                                        <span className="text-gray-700">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Curriculum Breakdown */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Program Curriculum</h2>
                            <div className="space-y-6">
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Month 1: Business Foundations</h3>
                                    <ul className="text-gray-600 list-disc ml-4 mt-2">
                                        <li>Business plan development</li>
                                        <li>Market research and analysis</li>
                                        <li>Legal requirements and registration</li>
                                        <li>Basic accounting and bookkeeping</li>
                                    </ul>
                                </div>
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Month 2: Marketing & Operations</h3>
                                    <ul className="text-gray-600 list-disc ml-4 mt-2">
                                        <li>Brand development and marketing strategies</li>
                                        <li>Social media management</li>
                                        <li>Inventory and supply chain management</li>
                                        <li>Customer relationship management</li>
                                    </ul>
                                </div>
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Month 3: Growth & Scaling</h3>
                                    <ul className="text-gray-600 list-disc ml-4 mt-2">
                                        <li>Advanced pricing strategies</li>
                                        <li>Team building and management</li>
                                        <li>Business expansion planning</li>
                                        <li>E-commerce integration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Practical Benefits */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-emerald-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-emerald-800 mb-2">Mentorship</h3>
                                    <p className="text-emerald-700">One-on-one guidance from successful business owners</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-emerald-800 mb-2">Networking</h3>
                                    <p className="text-emerald-700">Connect with industry professionals and peers</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-emerald-800 mb-2">Resources</h3>
                                    <p className="text-emerald-700">Access to business templates and tools</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-emerald-800 mb-2">Support</h3>
                                    <p className="text-emerald-700">Ongoing post-program business support</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-emerald-50 rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start Your Business Journey</h2>
                            <p className="text-gray-600 mb-6">Turn your tailoring passion into a profitable business.</p>
                            <div className="flex justify-center gap-4">
                                <Link 
                                    to="/signup" 
                                    className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 
                                             transform hover:scale-105 transition duration-300 shadow-md"
                                >
                                    Enroll Now
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg 
                                             hover:bg-emerald-50 transition duration-300"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}