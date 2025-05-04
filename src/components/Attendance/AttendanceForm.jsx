// components/Attendance/AttendanceForm.js
import { useState } from "react";

export default function AttendanceForm({ students, batchId, locationId, batchName, locationName }) {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [attendance, setAttendance] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    // Initialize attendance state with all students marked absent
    useState(() => {
        const initialAttendance = {};
        students.forEach(student => {
            initialAttendance[student.id] = false;
        });
        setAttendance(initialAttendance);
    }, [students]);

    const handleAttendanceChange = (studentId, isPresent) => {
        setAttendance(prev => ({
            ...prev,
            [studentId]: isPresent
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create attendance record
        const attendanceRecord = {
            date,
            locationId,
            locationName,
            batchId,
            batchName,
            records: Object.entries(attendance).map(([studentId, isPresent]) => {
                const student = students.find(s => s.id === studentId);
                return {
                    studentId,
                    studentName: student.name,
                    rollNo: student.rollNo,
                    isPresent
                };
            })
        };

        // Simulate API call
        setTimeout(() => {
            console.log("Attendance submitted:", attendanceRecord);
            setMessage({ type: "success", text: "Attendance recorded successfully!" });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Record Attendance</h2>
            <div className="mb-4">
                <p className="font-medium">Location: <span className="font-normal">{locationName}</span></p>
                <p className="font-medium">Batch: <span className="font-normal">{batchName}</span></p>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Date:</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Students</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border text-left">Roll No</th>
                                    <th className="py-2 px-4 border text-left">Name</th>
                                    <th className="py-2 px-4 border text-center">Present</th>
                                    <th className="py-2 px-4 border text-center">Absent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student.id}>
                                        <td className="py-2 px-4 border">{student.rollNo}</td>
                                        <td className="py-2 px-4 border">{student.name}</td>
                                        <td className="py-2 px-4 border text-center">
                                            <input 
                                                type="radio" 
                                                name={`attendance-${student.id}`}
                                                checked={attendance[student.id] === true}
                                                onChange={() => handleAttendanceChange(student.id, true)}
                                            />
                                        </td>
                                        <td className="py-2 px-4 border text-center">
                                            <input 
                                                type="radio" 
                                                name={`attendance-${student.id}`}
                                                checked={attendance[student.id] === false}
                                                onChange={() => handleAttendanceChange(student.id, false)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {message && (
                    <div className={`p-3 mb-4 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {message.text}
                    </div>
                )}

                <button 
                    type="submit" 
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Attendance'}
                </button>
            </form>
        </div>
    );
}
