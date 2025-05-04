// components/Attendance/AttendanceReport.js
import { useState } from "react";

export default function AttendanceReport({ attendanceData }) {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    
    // Mock attendance records for demo
    const [mockAttendanceRecords] = useState([
        {
            id: "rec1",
            date: "2025-05-01",
            locationId: "loc1",
            locationName: "Main Campus",
            batchId: "batch1",
            batchName: "Morning Batch 2025",
            records: [
                { studentId: "student1", studentName: "John Doe", rollNo: "A001", isPresent: true },
                { studentId: "student2", studentName: "Jane Smith", rollNo: "A002", isPresent: false },
                { studentId: "student3", studentName: "Alice Johnson", rollNo: "A003", isPresent: true },
                { studentId: "student4", studentName: "Bob Wilson", rollNo: "A004", isPresent: true }
            ]
        },
        {
            id: "rec2",
            date: "2025-05-02",
            locationId: "loc1",
            locationName: "Main Campus",
            batchId: "batch1",
            batchName: "Morning Batch 2025",
            records: [
                { studentId: "student1", studentName: "John Doe", rollNo: "A001", isPresent: true },
                { studentId: "student2", studentName: "Jane Smith", rollNo: "A002", isPresent: true },
                { studentId: "student3", studentName: "Alice Johnson", rollNo: "A003", isPresent: false },
                { studentId: "student4", studentName: "Bob Wilson", rollNo: "A004", isPresent: true }
            ]
        },
        {
            id: "rec3",
            date: "2025-05-03",
            locationId: "loc2",
            locationName: "Downtown Center",
            batchId: "batch3",
            batchName: "Weekend Batch A",
            records: [
                { studentId: "student8", studentName: "Fiona Green", rollNo: "C001", isPresent: true },
                { studentId: "student9", studentName: "George Hall", rollNo: "C002", isPresent: true },
                { studentId: "student10", studentName: "Hannah Baker", rollNo: "C003", isPresent: true },
                { studentId: "student11", studentName: "Ian Cooper", rollNo: "C004", isPresent: false }
            ]
        }
    ]);

    // Get available batches based on selected location
    const availableBatches = selectedLocation
        ? attendanceData.locations.find(loc => loc.id === selectedLocation)?.batches
          .map(batchId => attendanceData.batches[batchId])
        : [];

    // Filter attendance records
    const filteredRecords = mockAttendanceRecords.filter(record => {
        let matchesFilters = true;
        
        if (selectedLocation && record.locationId !== selectedLocation) {
            matchesFilters = false;
        }
        
        if (selectedBatch && record.batchId !== selectedBatch) {
            matchesFilters = false;
        }
        
        if (dateFilter && record.date !== dateFilter) {
            matchesFilters = false;
        }
        
        return matchesFilters;
    });

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Attendance Reports</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Location Filter */}
                <div>
                    <label className="block text-gray-700 mb-2">Location:</label>
                    <select 
                        className="w-full p-2 border rounded-md"
                        value={selectedLocation}
                        onChange={(e) => {
                            setSelectedLocation(e.target.value);
                            setSelectedBatch("");
                        }}
                    >
                        <option value="">All Locations</option>
                        {attendanceData.locations.map(location => (
                            <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Batch Filter */}
                <div>
                    <label className="block text-gray-700 mb-2">Batch:</label>
                    <select 
                        className="w-full p-2 border rounded-md"
                        value={selectedBatch}
                        onChange={(e) => setSelectedBatch(e.target.value)}
                        disabled={!selectedLocation}
                    >
                        <option value="">All Batches</option>
                        {availableBatches.map(batch => (
                            <option key={batch.id} value={batch.id}>
                                {batch.name}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Date Filter */}
                <div>
                    <label className="block text-gray-700 mb-2">Date:</label>
                    <input 
                        type="date" 
                        className="w-full p-2 border rounded-md"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                    />
                </div>
            </div>
            
            {/* Display filtered records */}
            {filteredRecords.length > 0 ? (
                <div className="space-y-6">
                    {filteredRecords.map(record => (
                        <div key={record.id} className="border rounded-md p-4">
                            <div className="mb-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                                <p className="font-medium">Date: <span className="font-normal">{record.date}</span></p>
                                <p className="font-medium">Location: <span className="font-normal">{record.locationName}</span></p>
                                <p className="font-medium">Batch: <span className="font-normal">{record.batchName}</span></p>
                            </div>
                            
                            <table className="min-w-full border">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="py-2 px-3 border text-left">Roll No</th>
                                        <th className="py-2 px-3 border text-left">Name</th>
                                        <th className="py-2 px-3 border text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record.records.map(student => (
                                        <tr key={student.studentId}>
                                            <td className="py-2 px-3 border">{student.rollNo}</td>
                                            <td className="py-2 px-3 border">{student.studentName}</td>
                                            <td className={`py-2 px-3 border text-center ${student.isPresent ? 'text-green-600' : 'text-red-600'}`}>
                                                {student.isPresent ? 'Present' : 'Absent'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                            <div className="mt-3 text-right">
                                <span className="text-sm text-gray-600">
                                    Present: {record.records.filter(s => s.isPresent).length} | 
                                    Absent: {record.records.filter(s => !s.isPresent).length} | 
                                    Total: {record.records.length}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500">
                    No attendance records found matching the selected criteria.
                </div>
            )}
        </div>
    );
}
