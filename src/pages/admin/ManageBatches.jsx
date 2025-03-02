import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";

export default function ManageBatches() {
    const [batches, setBatches] = useState([]);
    const [batchName, setBatchName] = useState("");

    const addBatch = () => {
        if (batchName.trim() === "") return;
        setBatches([...batches, { id: Date.now(), name: batchName }]);
        setBatchName("");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-6">Manage Batches</h1>

                <div className="bg-white p-6 rounded shadow-md">
                    <input
                        type="text"
                        className="w-full border p-2 rounded mb-2"
                        placeholder="Enter batch name"
                        value={batchName}
                        onChange={(e) => setBatchName(e.target.value)}
                    />
                    <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={addBatch}>
                        Add Batch
                    </button>
                </div>

                <ul className="mt-6">
                    {batches.map((batch) => (
                        <li key={batch.id} className="bg-white p-4 shadow rounded mt-2">
                            {batch.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
