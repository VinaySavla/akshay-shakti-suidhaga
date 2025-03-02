import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Navbar />
            <h1 className="text-3xl font-bold mt-20">Welcome to Akshay Shakti</h1>
            <p className="text-lg mt-4">Empowering women through tailoring training and job opportunities.</p>
        </div>
    );
}
