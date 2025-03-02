import Navbar from "../components/Navbar";
import StudentList from "../components/Student/StudentList";

export default function StudentDashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="pt-20 p-4">
                <h1 className="text-3xl font-bold text-center">Student Dashboard</h1>
                <p className="text-lg text-center mt-2">Manage student profiles and training attendance.</p>
                <StudentList />
            </div>
        </div>
    );
}
