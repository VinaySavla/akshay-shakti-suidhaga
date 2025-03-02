export default function JobCard({ job }) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="font-semibold text-blue-500">{job.price}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Apply Now
            </button>
        </div>
    );
}
