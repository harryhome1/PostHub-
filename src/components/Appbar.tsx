import { useState } from "react"; // Import useState to manage tooltip visibility
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi"; // Pencil icon for creativity

export const Appbar = () => {
    const [isHovered, setIsHovered] = useState(false); // State to manage tooltip visibility

    return (
        <div className="bg-white border-b flex justify-between items-center px-10 py-4 shadow-lg">
            <Link to={'/blogs'} className="text-3xl font-semibold text-gray-800 flex items-center space-x-2 transition duration-300 hover:text-blue-600">
                <HiPencilAlt className="w-6 h-6 text-gray-600" />
                <span>PostHub</span>
            </Link>
            <div className="relative flex items-center space-x-6">
                <Link to={`/publish`}>
                    <button
                        type="button"
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 shadow-sm transition duration-200"
                        onMouseEnter={() => setIsHovered(true)} // Show tooltip on hover
                        onMouseLeave={() => setIsHovered(false)} // Hide tooltip when not hovering
                    >
                        Create New
                    </button>
                </Link>
                {isHovered && (
                    <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-yellow-100 text-gray-800 border border-gray-300 rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out 
                        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                        "In a world full of noise, your voice matters!"
                    </div>
                )}
                <Avatar size={"big"} name="hariom" />
            </div>
        </div>
    );
}


