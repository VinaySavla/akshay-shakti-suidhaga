import { useState, useEffect } from "react";
import StudentProfile from "./StudentProfile";

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch student data (Replace with actual API call)
        const dummyStudents = [
            { id: 1, name: "Anjali Gupta", batch: "Batch A", attendance: "85%" },
            { id: 2, name: "Neha Sharma", batch: "Batch B", attendance: "92%" },
            { id: 3, name: "Pooja Verma", batch: "Batch A", attendance: "88%" },
        ];
        setStudents(dummyStudents);
    }, []);

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {students.map((student) => (
                <StudentProfile key={student.id} student={student} />
            ))}
        </div>
    );
}
