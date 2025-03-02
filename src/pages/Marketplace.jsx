import Navbar from "../components/Navbar";
import JobList from "../components/Marketplace/JobList";

export default function Marketplace() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="pt-20 p-4">
                <h1 className="text-3xl font-bold text-center">Freelance Job Marketplace</h1>
                <p className="text-lg text-center mt-2">Find or post tailoring and artistic jobs.</p>
                <JobList />
            </div>
        </div>
    );
}
