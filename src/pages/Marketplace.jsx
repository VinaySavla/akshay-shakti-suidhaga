import Navbar from "../components/Navbar";
import { useState } from "react";

// Sample data for products, services, and job listings
const marketplaceData = {
  products: {
    men: [
      { id: 1, name: "Handwoven Cotton Kurta", description: "Traditional handwoven kurta with subtle embroidery", price: 1999, image: "./cotkurta.jpg", seller: "Traditional Textiles" },
      { id: 2, name: "Embroidered Nehru Jacket", description: "Elegant silk nehru jacket with intricate embroidery", price: 3499, image: "./nehru.jpg", seller: "Heritage Couture" },
      { id: 3, name: "Handblock Printed Shirt", description: "100% cotton shirt with traditional block prints", price: 1299, image: "./block.jpg", seller: "Artisan Apparels" },
      { id: 4, name: "Dhoti Pants", description: "Contemporary dhoti pants with pocket details", price: 1599, image: "./dhoti.jpg", seller: "Modern Ethnics" },
    ],
    women: [
      { id: 1, name: "Handloom Silk Saree", description: "Traditional handcrafted silk saree with intricate patterns", price: 4999, image: "./handloom.jpg", seller: "Crafts by Meera" },
      { id: 2, name: "Embroidered Kurta Set", description: "Cotton kurta with delicate hand embroidery", price: 2499, image: "./Set.jpg", seller: "Traditional Textiles" },
      { id: 3, name: "Banarasi Dupatta", description: "Authentic banarasi silk dupatta with golden zari work", price: 1799, image: "./gold.jpg", seller: "Heritage Handlooms" },
      { id: 4, name: "Block Print Anarkali", description: "Hand block printed anarkali in natural dyes", price: 3299, image: "./Anarkali.jpg", seller: "Ethnic Elegance" },
    ],
    kids: [
      { id: 1, name: "Children's Festival Kurta Set", description: "Colorful kurta pajama set for special occasions", price: 1299, image: "./gkurpyajama.jpg", seller: "Kids Ethnic" },
      { id: 2, name: "Hand Embroidered Frock", description: "Cotton frock with traditional hand embroidery", price: 899, image: "./frockids.jpg", seller: "Little Threads" },
      { id: 3, name: "Kids Dhoti Kurta", description: "Traditional dhoti kurta for boys' ceremonies", price: 1499, image: "./kurdhoti.jpg", seller: "Mini Traditions" },
      { id: 4, name: "Lehenga Choli for Girls", description: "Festive lehenga choli with mirror work", price: 1899, image: "./lehkids.jpg", seller: "Tiny Treasures" },
    ],
    home: [
      { id: 1, name: "Hand-painted Wall Hanging", description: "Traditional madhubani painting on handmade paper", price: 1899, image: "./wallha.jpg", seller: "Art & Culture" },
      { id: 2, name: "Block Print Table Runner", description: "Cotton table runner with vegetable dye block prints", price: 799, image: "./tablerun.jpg", seller: "Home Textiles" },
      { id: 3, name: "Brass Diya Set", description: "Set of 5 traditional brass diyas for festive decoration", price: 1299, image: "./diya.jpg", seller: "Festival Crafts" },
      { id: 4, name: "Embroidered Cushion Covers", description: "Hand-embroidered cushion covers with mirror work", price: 999, image: "./pillow.jpg", seller: "Stitch Stories" },
    ],
    beauty: [
      { id: 1, name: "Organic Henna Kit", description: "Natural henna with applicator and design booklet", price: 499, image: "./henna.jpg", seller: "Natural Hues" },
      { id: 2, name: "Handmade Soap Set", description: "Set of 4 artisanal soaps with natural ingredients", price: 699, image: "./soaps.jpg", seller: "Organic Essentials" },
      { id: 3, name: "Traditional Kohl", description: "Authentic kajal made with traditional recipes", price: 349, image: "./kohl.jpg", seller: "Heritage Beauty" },
      { id: 4, name: "Ayurvedic Hair Oil", description: "Handcrafted hair oil with ancient ayurvedic herbs", price: 599, image: "./oil.jpg", seller: "Roots & Herbs" },
    ]
  },
  
  services: [
    { id: 1, title: "Tailoring Classes for Beginners", description: "Learn basic stitching and garment construction techniques", price: 2499, duration: "4 weeks", image: "./beginner.jpg", provider: "Master Tailor Riya" },
    { id: 2, title: "Advanced Embroidery Workshop", description: "Master intricate embroidery patterns and techniques", price: 3999, duration: "8 sessions", image: "./embroidery.jpg", provider: "Embroidery Guild" },
    { id: 3, title: "Custom Tailoring Service", description: "Get your garments tailored to your measurements", price: "Starts at ₹800", duration: "3-5 days", image: "./custom.jpg", provider: "Perfect Fit Studio" },
    { id: 4, title: "Fashion Design Consultation", description: "Get professional advice on your clothing line", price: 1499, duration: "90 minutes", image: "./consult.jpg", provider: "Design Experts" },
  ],
  
  jobs: [
    { id: 1, title: "Master Tailor Needed", company: "Ethnic Boutique", location: "Mumbai", type: "Full-time", salary: "₹25,000 - ₹35,000/month", posted: "2 days ago", description: "Looking for an experienced tailor with 5+ years of experience in women's ethnic wear" },
    { id: 2, title: "Hand Embroidery Artisan", company: "Heritage Crafts", location: "Jaipur", type: "Part-time", salary: "₹300/hour", posted: "1 week ago", description: "Skilled artisans needed for traditional hand embroidery work on luxury garments" },
    { id: 3, title: "Fashion Design Intern", company: "Modern Attire", location: "Delhi", type: "Internship", salary: "₹10,000/month", posted: "3 days ago", description: "Fashion design students looking for hands-on experience in a working studio" },
    { id: 4, title: "Sewing Machine Operator", company: "TextCraft Industries", location: "Ahmedabad", type: "Contract", salary: "Piece rate", posted: "5 days ago", description: "Experienced sewing machine operators needed for production of export quality garments" },
  ]
};

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState("products");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [productCategory, setProductCategory] = useState("men");

  const handleContactSeller = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      // Logic to contact seller (would connect to backend in a real app)
      alert(`Message sent to ${selectedItem.seller || selectedItem.provider || selectedItem.company}. They will contact you soon!`);
      setSelectedItem(null);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials with your backend
    if (credentials.email && credentials.password) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      // After successful login, trigger the contact seller function again
      handleContactSeller();
    }
  };

  const renderProductTabs = () => {
    const categories = ["men", "women", "kids", "home", "beauty"];
    
    return (
      <div className="flex overflow-x-auto mb-6 bg-white p-2 rounded-lg shadow-sm">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 whitespace-nowrap mx-1 rounded-lg font-medium text-sm ${
              productCategory === category 
                ? "bg-rose-100 text-rose-800" 
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setProductCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    );
  };

  const renderProducts = () => {
    return (
      <>
        {renderProductTabs()}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {marketplaceData.products[productCategory].map((product) => (
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
      </>
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

  const renderJobs = () => {
    return (
      <div className="space-y-4">
        {marketplaceData.jobs.map((job) => (
          <div 
            key={job.id} 
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer p-5 transition-transform hover:scale-101 border-l-4 border-blue-400"
            onClick={() => setSelectedItem(job)}
          >
            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.company} • {job.location}</p>
              </div>
              <div className="mt-2 sm:mt-0 flex items-start">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">{job.description}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between">
              <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-900 mr-4">{job.salary}</span>
                <span className="text-xs text-gray-500">Posted: {job.posted}</span>
              </div>
              <button className="mt-2 sm:mt-0 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100">
                View & Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderItemDetails = () => {
    if (!selectedItem) return null;

    // Different rendering based on item type
    if (selectedItem.hasOwnProperty('company')) {
      // It's a job
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
                <button onClick={() => setSelectedItem(null)} className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center mt-2">
                <span className="font-semibold text-gray-700">{selectedItem.company}</span>
                <span className="mx-2">•</span>
                <span className="text-gray-600">{selectedItem.location}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Job Type</p>
                <p className="font-medium">{selectedItem.type}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Salary</p>
                <p className="font-medium">{selectedItem.salary}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Posted</p>
                <p className="font-medium">{selectedItem.posted}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Job Description</h3>
              <p className="text-gray-700">{selectedItem.description}</p>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleContactSeller}
                className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
              >
                Apply for Job
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
    } else if (selectedItem.hasOwnProperty('duration')) {
      // It's a service
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
      // It's a product
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
          <p className="text-lg text-gray-600">Browse products, services, and job opportunities in the tailoring industry</p>
        </div>

        {/* Marketplace Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "products" ? "bg-white text-rose-700 shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("products")}
            >
              Products
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "services" ? "bg-white text-teal-700 shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("services")}
            >
              Services
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "jobs" ? "bg-white text-blue-700 shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              Job Listings
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
              Explore Now
            </button>
          </div>
        </div>

        {/* Marketplace Content */}
        <div className="mb-12">
          {activeTab === "products" && renderProducts()}
          {activeTab === "services" && renderServices()}
          {activeTab === "jobs" && renderJobs()}
        </div>

        {/* Item Details Modal */}
        {renderItemDetails()}
        
        {/* Login Modal */}
        {renderLoginModal()}
      </div>
    </div>
  );
}