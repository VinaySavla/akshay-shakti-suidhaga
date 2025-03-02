import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";

export default function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");

    const addProduct = () => {
        if (productName.trim() === "") return;
        setProducts([...products, { id: Date.now(), name: productName }]);
        setProductName("");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-6">Manage Products</h1>

                <div className="bg-white p-6 rounded shadow-md">
                    <input
                        type="text"
                        className="w-full border p-2 rounded mb-2"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addProduct}>
                        Add Product
                    </button>
                </div>

                <ul className="mt-6">
                    {products.map((product) => (
                        <li key={product.id} className="bg-white p-4 shadow rounded mt-2">
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
