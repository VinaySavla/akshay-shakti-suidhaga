import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />
            
                        {/* Hero Section */}
            <div className="relative h-[90vh] overflow-hidden">
                {/* Background GIF - Left Aligned */}
                <div className="absolute left-0 h-full w-1/2">
                    <img
                        src="/images/sewing.gif"
                        alt="Tailoring Background"
                        className="h-full w-full object-contain object-left"
                        style={{ filter: 'brightness(0.7)' }}
                    />
                </div>

                {/* Content Overlay - Right Side */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="w-1/2 ml-auto pr-12">
                        <h1 className="text-5xl font-bold mb-4 text-gray-800 text-center">
                            Welcome to SuiDhaga
                        </h1>
                        <p className="text-xl mb-8 text-gray-600 text-center">
                            Empowering women through tailoring training and job opportunities.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link 
                                to="/signup" 
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
                                         transform hover:scale-105 transition duration-300 shadow-lg"
                            >
                                Get Started
                            </Link>
                            <Link 
                                to="/login" 
                                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg 
                                         hover:bg-blue-50 transition duration-300"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Training Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-xl hover:shadow-lg transition duration-300">
                            <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-gray-200">
                                <img 
                                    src="/images/tailoringmachine.webp" 
                                    alt="Basic Tailoring" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Basic Tailoring</h3>
                            <p className="text-gray-600 mb-4">Learn fundamental stitching techniques and garment construction.</p>
                            <Link to="/programs/basic" className="text-blue-600 hover:underline">Learn more →</Link>
                        </div>
                        
                        <div className="p-6 border rounded-xl hover:shadow-lg transition duration-300">
                            <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-gray-200">
                                <img 
                                    src="/images/advance.webp" 
                                    alt="Advanced Design" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Advanced Design</h3>
                            <p className="text-gray-600 mb-4">Master pattern making and complex garment designs.</p>
                            <Link to="/programs/advanced" className="text-blue-600 hover:underline">Learn more →</Link>
                        </div>
                        
                        <div className="p-6 border rounded-xl hover:shadow-lg transition duration-300">
                            <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-gray-200">
                                <img 
                                    src="/images/marketing.png" 
                                    alt="Business Skills" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Business Skills</h3>
                            <p className="text-gray-600 mb-4">Develop entrepreneurship and management skills.</p>
                            <Link to="/programs/business" className="text-blue-600 hover:underline">Learn more →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketplace Preview */}
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Marketplace</h2>
                    <p className="text-center mb-8">Discover handcrafted clothing and accessories made by our talented artisans.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                            <img 
                                src="/images/saree.png" 
                                alt="Handcrafted Saree"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                            <img 
                                src="/images/designer.png" 
                                alt="Designer Blouse"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                            <img 
                                src="/images/kurta.jpg" 
                                alt="Cotton Kurta"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                            <img 
                                src="/images/western.jpg" 
                                alt="Western Dress"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/marketplace" className="text-blue-600 font-semibold hover:underline">
                            View All Products →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}