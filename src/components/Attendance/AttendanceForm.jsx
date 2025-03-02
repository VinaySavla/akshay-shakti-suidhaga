import { useState } from "react";

export default function AttendanceForm() {
    const [batch, setBatch] = useState("");
    const [date, setDate] = useState("");
    const [attendance, setAttendance] = useState({});

    const students = [
        { id: 1, name: "Anjali Gupta" },
        { id: 2, name: "Neha Sharma" },
        { id: 3, name: "Pooja Verma" },
    ];

    const handleAttendanceChange = (id) => {
        setAttendance((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Attendance Data:", { batch, date, attendance });
        alert("Attendance submitted successfully!");
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Mark Attendance</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <label className="block font-medium">Select Batch:</label>
                <select
                    className="w-full p-2 border rounded mt-1"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    required
                >
                    <option value="">Select Batch</option>
                    <option value="Batch A">Batch A</option>
                    <option value="Batch B">Batch B</option>
                </select>

                <label className="block font-medium mt-4">Select Date:</label>
                <input
                    type="date"
                    className="w-full p-2 border rounded mt-1"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />

                <h3 className="text-lg font-semibold mt-4">Students:</h3>
                <div className="mt-2">
                    {students.map((student) => (
                        <div key={student.id} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={`student-${student.id}`}
                                checked={!!attendance[student.id]}
                                onChange={() => handleAttendanceChange(student.id)}
                            />
                            <label htmlFor={`student-${student.id}`} className="cursor-pointer">
                                {student.name}
                            </label>
                        </div>
                    ))}
                </div>

                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Submit Attendance
                </button>
            </form>
        </div>
    );
}
