export default function StudentProfile({ student }) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold">{student.name}</h2>
            <p className="text-gray-600">Batch: {student.batch}</p>
            <p className="font-semibold text-blue-500">Attendance: {student.attendance}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View Details
            </button>
        </div>
    );
}
