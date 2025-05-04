import Navbar from "../components/Navbar";
import { useState } from "react";
import AttendanceForm from "../components/Attendance/AttendanceForm";
import AttendanceReport from "../components/Attendance/AttendanceReport";

// Static data for locations, batches, and students
const attendanceData = {
  locations: [
    {
      id: "loc1",
      name: "Main Campus",
      batches: ["batch1", "batch2"]
    },
    {
      id: "loc2",
      name: "Downtown Center",
      batches: ["batch3", "batch4"]
    },
    {
      id: "loc3",
      name: "East Wing",
      batches: ["batch5"]
    }
  ],
  batches: {
    "batch1": {
      id: "batch1",
      name: "Morning Batch 2025",
      students: ["student1", "student2", "student3", "student4"]
    },
    "batch2": {
      id: "batch2",
      name: "Evening Batch 2025",
      students: ["student5", "student6", "student7"]
    },
    "batch3": {
      id: "batch3",
      name: "Weekend Batch A",
      students: ["student8", "student9", "student10", "student11"]
    },
    "batch4": {
      id: "batch4",
      name: "Weekend Batch B",
      students: ["student12", "student13", "student14"]
    },
    "batch5": {
      id: "batch5",
      name: "Special Batch",
      students: ["student15", "student16", "student17", "student18", "student19"]
    }
  },
  students: {
    "student1": { id: "student1", name: "John Doe", rollNo: "A001" },
    "student2": { id: "student2", name: "Jane Smith", rollNo: "A002" },
    "student3": { id: "student3", name: "Alice Johnson", rollNo: "A003" },
    "student4": { id: "student4", name: "Bob Wilson", rollNo: "A004" },
    "student5": { id: "student5", name: "Charlie Brown", rollNo: "B001" },
    "student6": { id: "student6", name: "Diana Prince", rollNo: "B002" },
    "student7": { id: "student7", name: "Edward Lewis", rollNo: "B003" },
    "student8": { id: "student8", name: "Fiona Green", rollNo: "C001" },
    "student9": { id: "student9", name: "George Hall", rollNo: "C002" },
    "student10": { id: "student10", name: "Hannah Baker", rollNo: "C003" },
    "student11": { id: "student11", name: "Ian Cooper", rollNo: "C004" },
    "student12": { id: "student12", name: "Jessica Day", rollNo: "D001" },
    "student13": { id: "student13", name: "Kevin Hart", rollNo: "D002" },
    "student14": { id: "student14", name: "Lucy Liu", rollNo: "D003" },
    "student15": { id: "student15", name: "Michael Scott", rollNo: "E001" },
    "student16": { id: "student16", name: "Nancy Wheeler", rollNo: "E002" },
    "student17": { id: "student17", name: "Oscar Martinez", rollNo: "E003" },
    "student18": { id: "student18", name: "Pam Beesly", rollNo: "E004" },
    "student19": { id: "student19", name: "Quinn Fabray", rollNo: "E005" }
  }
};

export default function Attendance() {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");
    
    // Get available batches based on selected location
    const availableBatches = selectedLocation
        ? attendanceData.locations.find(loc => loc.id === selectedLocation)?.batches
          .map(batchId => attendanceData.batches[batchId])
        : [];
    
    // Get students from selected batch
    const studentsInBatch = selectedBatch
        ? attendanceData.batches[selectedBatch]?.students
          .map(studentId => attendanceData.students[studentId])
        : [];

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="pt-20 p-4">
                <h1 className="text-3xl font-bold text-center">Attendance Management</h1>
                <p className="text-lg text-center mt-2">Mark and review student attendance.</p>

                <div className="mt-6 max-w-3xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-xl font-semibold mb-4">Select Location and Batch</h2>
                        
                        {/* Location Selector */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Location:</label>
                            <select 
                                className="w-full p-2 border rounded-md"
                                value={selectedLocation}
                                onChange={(e) => {
                                    setSelectedLocation(e.target.value);
                                    setSelectedBatch("");
                                }}
                            >
                                <option value="">Select Location</option>
                                {attendanceData.locations.map(location => (
                                    <option key={location.id} value={location.id}>
                                        {location.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Batch Selector - Only show if location is selected */}
                        {selectedLocation && (
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Batch:</label>
                                <select 
                                    className="w-full p-2 border rounded-md"
                                    value={selectedBatch}
                                    onChange={(e) => setSelectedBatch(e.target.value)}
                                >
                                    <option value="">Select Batch</option>
                                    {availableBatches.map(batch => (
                                        <option key={batch.id} value={batch.id}>
                                            {batch.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Only show attendance form if both location and batch are selected */}
                    {selectedLocation && selectedBatch && (
                        <div className="mt-6">
                            <AttendanceForm 
                                students={studentsInBatch} 
                                batchId={selectedBatch}
                                locationId={selectedLocation}
                                batchName={attendanceData.batches[selectedBatch].name}
                                locationName={attendanceData.locations.find(loc => loc.id === selectedLocation).name}
                            />
                        </div>
                    )}
                </div>

                <div className="mt-10">
                    <AttendanceReport 
                        attendanceData={attendanceData}
                    />
                </div>
            </div>
        </div>
    );
}
