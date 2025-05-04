import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

// Sample data for products, services, and listings
const marketplaceData = {
  products: [
    { id: 1, name: "Handwoven Cotton Kurta", description: "Traditional handwoven kurta with subtle embroidery", price: 1999, image: "./cotkurta.jpg", seller: "Traditional Textiles" },
    { id: 2, name: "Embroidered Nehru Jacket", description: "Elegant silk nehru jacket with intricate embroidery", price: 3499, image: "./nehru.jpg", seller: "Heritage Couture" },
    { id: 3, name: "Handblock Printed Shirt", description: "100% cotton shirt with traditional block prints", price: 1299, image: "./block.jpg", seller: "Artisan Apparels" },
    { id: 4, name: "Dhoti Pants", description: "Contemporary dhoti pants with pocket details", price: 1599, image: "./dhoti.jpg", seller: "Modern Ethnics" },
  ],
  services: [
    { id: 1, title: "Tailoring Classes for Beginners", description: "Learn basic stitching and garment construction techniques", price: 2499, duration: "4 weeks", image: "./beginner.jpg", provider: "Master Tailor Riya" },
    { id: 2, title: "Advanced Embroidery Workshop", description: "Master intricate embroidery patterns and techniques", price: 3999, duration: "8 sessions", image: "./embroidery.jpg", provider: "Embroidery Guild" },
    { id: 3, title: "Custom Tailoring Service", description: "Get your garments tailored to your measurements", price: "Starts at ₹800", duration: "3-5 days", image: "./custom.jpg", provider: "Perfect Fit Studio" },
    { id: 4, title: "Fashion Design Consultation", description: "Get professional advice on your clothing line", price: 1499, duration: "90 minutes", image: "./consult.jpg", provider: "Design Experts" },
  ],
  requestedProducts: [
    {
      id: 1,
      name: "Custom Embroidered Saree",
      description: "Looking for a saree with custom embroidery work. Preferably silk with floral patterns.",
      budget: "₹3,000 - ₹5,000",
      additionalDetails: "Need it for a wedding event, delivery required within 2 weeks."
    },
    {
      id: 2,
      name: "Handcrafted Leather Bag",
      description: "Seeking a durable leather bag with traditional handcraft designs.",
      budget: "₹2,000 - ₹3,500",
      additionalDetails: "Must have multiple compartments and a shoulder strap."
    }
  ],
  requestedServices: [
    {
      id: 1,
      title: "Custom Tailoring for Wedding Dress",
      description: "Need a professional tailor to create a custom wedding dress. Design and fabric will be provided.",
      budget: "₹10,000 - ₹15,000",
      additionalDetails: "Completion required within 1 month. Experience with bridal wear is preferred."
    },
    {
      id: 2,
      title: "Embroidery Workshop for Beginners",
      description: "Looking for a workshop to learn basic embroidery techniques.",
      budget: "₹1,500 - ₹2,500",
      additionalDetails: "Prefer weekend classes, total duration should be around 4 sessions."
    }
  ]
};

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState("sellProducts");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [requestedProducts, setRequestedProducts] = useState([]);
  const [requestedServices, setRequestedServices] = useState([]);

  useEffect(() => {
    setRequestedProducts(marketplaceData.requestedProducts);
    setRequestedServices(marketplaceData.requestedServices);
  }, []);

  const handleContactSeller = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      alert(`Message sent to ${selectedItem.seller || selectedItem.provider}. They will contact you soon!`);
      setSelectedItem(null);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      handleContactSeller();
    }
  };

  const renderProducts = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {marketplaceData.products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedItem(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2 h-12 overflow-hidden">{product.description}</p>
              <p className="text-xs text-gray-500 mb-2">Seller: {product.seller}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                <button className="px-3 py-1 bg-rose-50 text-rose-800 rounded-full text-sm font-medium hover:bg-rose-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderRequestedProducts = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {requestedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-105">
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">{product.budget}</span>
                <button className="px-3 py-1 bg-rose-50 text-rose-800 rounded-full text-sm font-medium hover:bg-rose-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderServices = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketplaceData.services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedItem(service)}
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Provider: {service.provider}</span>
                <span>Duration: {service.duration}</span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">₹{service.price}</span>
                <button className="px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-sm font-medium hover:bg-teal-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderRequestedServices = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {requestedServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-105">
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">{service.budget}</span>
                <button className="px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-sm font-medium hover:bg-teal-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderItemDetails = () => {
    if (!selectedItem) return null;

    if (selectedItem.hasOwnProperty('provider')) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
              <button onClick={() => setSelectedItem(null)} className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Provider</p>
                  <p className="font-medium">{selectedItem.provider}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{selectedItem.duration}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">₹{selectedItem.price}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">Service Description</h3>
              <p className="text-gray-700">{selectedItem.description}</p>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleContactSeller}
                className="flex-1 py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg"
              >
                Book Service
              </button>
              <button 
                onClick={() => setSelectedItem(null)}
                className="py-2 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{selectedItem.name}</h2>
              <button onClick={() => setSelectedItem(null)} className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Seller</p>
                  <p className="font-medium">{selectedItem.seller}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">₹{selectedItem.price}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">Product Description</h3>
              <p className="text-gray-700">{selectedItem.description}</p>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleContactSeller}
                className="flex-1 py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg"
              >
                Contact Seller
              </button>
              <button 
                onClick={() => setSelectedItem(null)}
                className="py-2 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderLoginModal = () => {
    if (!showLoginModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Login Required</h2>
            <button onClick={() => setShowLoginModal(false)} className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-gray-600 mb-4">Please login to contact the seller.</p>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                placeholder="your@email.com"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                placeholder="••••••••"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
              />
            </div>
            <div className="flex space-x-3">
              <button 
                type="submit"
                className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
              >
                Login
              </button>
              <button 
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="py-2 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 px-4 py-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Tailoring Marketplace</h1>
          <p className="text-lg text-gray-600">Browse products and services in the tailoring industry</p>
        </div>

        {/* Marketplace Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "sellProducts" ? "bg-white text-rose-700 shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("sellProducts")}
            >
              Sell Products
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "requestedProducts" ? "bg-white text-rose-700 shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("requestedProducts")}
            >
              Request Products
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "provideServices" ? "bg-white text-teal-700 shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("provideServices")}
            >
              Provide Services
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "requestedServices" ? "bg-white text-teal-700 shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("requestedServices")}
            >
              Request Services
            </button>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-rose-800 mb-2">Featured Collection</h2>
              <p className="text-rose-700">Discover our handpicked selection of artisanal products</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700">
              Add Product
            </button>
          </div>
        </div>

        {/* Marketplace Content */}
        <div className="mb-12">
          {activeTab === "sellProducts" && renderProducts()}
          {activeTab === "requestedProducts" && renderRequestedProducts()}
          {activeTab === "provideServices" && renderServices()}
          {activeTab === "requestedServices" && renderRequestedServices()}
        </div>

        {/* Item Details Modal */}
        {renderItemDetails()}
        
        {/* Login Modal */}
        {renderLoginModal()}
      </div>
    </div>
  );
}
