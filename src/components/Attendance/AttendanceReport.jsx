import { useState, useEffect } from "react";

export default function AttendanceReport() {
    const [report, setReport] = useState([]);

    useEffect(() => {
        // Replace with an actual API call
        const dummyReport = [
            { id: 1, name: "Anjali Gupta", batch: "Batch A", date: "2025-03-02", status: "Present" },
            { id: 2, name: "Neha Sharma", batch: "Batch B", date: "2025-03-01", status: "Absent" },
            { id: 3, name: "Pooja Verma", batch: "Batch A", date: "2025-03-01", status: "Present" },
        ];
        setReport(dummyReport);
    }, []);

    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Attendance Report</h2>
            <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Batch</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {report.map((entry) => (
                        <tr key={entry.id} className="text-center">
                            <td className="border p-2">{entry.name}</td>
                            <td className="border p-2">{entry.batch}</td>
                            <td className="border p-2">{entry.date}</td>
                            <td className={`border p-2 ${entry.status === "Present" ? "text-green-600" : "text-red-600"}`}>
                                {entry.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
