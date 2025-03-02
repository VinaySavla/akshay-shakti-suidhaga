import JobCard from "./JobCard";

export default function JobList() {
    const jobs = [
        { id: 1, title: "Saree Stitching", company: "ABC Fashions", price: "₹500 per piece" },
        { id: 2, title: "Hand Embroidery", company: "Handmade Co.", price: "₹300 per design" },
        { id: 3, title: "Alteration Work", company: "TailorX", price: "₹150 per alteration" },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}
