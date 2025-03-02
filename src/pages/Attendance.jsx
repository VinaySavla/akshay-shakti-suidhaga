import Navbar from "../components/Navbar";
import AttendanceForm from "../components/Attendance/AttendanceForm";
import AttendanceReport from "../components/Attendance/AttendanceReport";

export default function Attendance() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="pt-20 p-4">
                <h1 className="text-3xl font-bold text-center">Attendance Management</h1>
                <p className="text-lg text-center mt-2">Mark and review student attendance.</p>

                <div className="mt-6">
                    <AttendanceForm />
                </div>

                <div className="mt-10">
                    <AttendanceReport />
                </div>
            </div>
        </div>
    );
}
