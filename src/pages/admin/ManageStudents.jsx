import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";

export default function ManageStudents() {
    const [students, setStudents] = useState([]);
    const [studentName, setStudentName] = useState("");

    const addStudent = () => {
        if (studentName.trim() === "") return;
        setStudents([...students, { id: Date.now(), name: studentName }]);
        setStudentName("");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-6">Manage Students</h1>

                <div className="bg-white p-6 rounded shadow-md">
                    <input
                        type="text"
                        className="w-full border p-2 rounded mb-2"
                        placeholder="Enter student name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={addStudent}>
                        Add Student
                    </button>
                </div>

                <ul className="mt-6">
                    {students.map((student) => (
                        <li key={student.id} className="bg-white p-4 shadow rounded mt-2">
                            {student.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
