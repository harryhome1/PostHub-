// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//       <h1 className="text-3xl font-semibold mb-6 text-black text-center">Join Our Community for Free</h1>
//       <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-md">
//         <Link to="/signup" className="w-full lg:w-1/2 mb-4 lg:mb-0">
//           <button type="button" className="w-full bg-white text-sm text-gray-600 p-3 rounded-md shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
//             Sign Up
//           </button>
//         </Link>
//         <Link to="/signin" className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-2">
//           <button type="button" className="w-full bg-white text-sm text-gray-600 p-3 rounded-md shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
//             Sign In
//           </button>
//         </Link>
//       </div>
//       <p className="mt-8 text-gray-600 text-center">Please sign up to access our blogs.</p>
//       <Link to="/blogs" className="mt-4">
//         <button type="button" className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors duration-300">
//           View Blogs
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Home;
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f4f4f4] min-h-screen flex flex-col justify-center items-center">
      {/* Navbar */}
      <nav className="w-full py-6 bg-[#f4f4f4] flex justify-between px-10 fixed top-0 z-10 shadow-lg text-lg"> {/* Same background color */}
        <div className="text-3xl font-extrabold text-black cursor-pointer hover:text-gray-800 transition-transform transform hover:scale-110 duration-300 tracking-wide"> {/* Larger text, extra bold, and cool hover effect */}
          Posthub
        </div>
        <div className="flex items-center space-x-8 text-xl font-medium text-black tracking-wider"> {/* Larger nav links, spaced-out */}
          <Link to="/signup" className="hover:text-gray-700 hover:underline transition-colors duration-300">
            Sign Up
          </Link>
          <Link to="/signin" className="hover:text-gray-700 hover:underline transition-colors duration-300">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center mt-24 animate-fade-in"> {/* Adjusted margin for larger navbar */}
        <h1 className="text-5xl font-bold text-black mb-6 text-center">
          Human stories & ideas
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          A place to read, write, and deepen your understanding.
        </p>

        <div className="flex space-x-6">
          <Link to="/signup">
            <button
              type="button"
              className="px-10 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
            >
              Get started
            </button>
          </Link>
          <Link to="/signin">
            <button
              type="button"
              className="px-10 py-4 bg-white text-black font-semibold rounded-lg border border-black hover:bg-gray-50 transition-all duration-300"
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p className="mt-8">
          Join Posthub for more personalized stories and insights!
        </p>
        <Link to="/signin" className="mt-4 inline-block">
          <button
            type="button"
            className="mt-4 px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-300"
          >
            View Blogs
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
