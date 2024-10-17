import { useState, useEffect } from "react";

// Quotes related to blog posts
const quotes = [
  {
    text: "This blog post really opened my eyes to the importance of web accessibility. A must-read for developers!",
    author: "Jessica Lee",
    designation: "Web Developer",
  },
  {
    text: "The insights on digital marketing strategies in this post are game-changing. I've already started applying them!",
    author: "David Brown",
    designation: "Marketing Specialist",
  },
  {
    text: "I found the tips on improving website performance incredibly helpful. My site now loads twice as fast!",
    author: "Lisa Green",
    designation: "SEO Expert",
  },
  {
    text: "This article on AI in web development is a goldmine of information. It explains complex topics in a simple way.",
    author: "Ethan White",
    designation: "Tech Blogger",
  },
  {
    text: "The post on content creation helped me understand how to engage readers effectively. Highly recommended!",
    author: "Sophia Taylor",
    designation: "Content Strategist",
  },
];

export const Quote = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 3000); // Faster change every 3 seconds
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [isPaused]);

  const { text, author, designation } = quotes[currentQuoteIndex];

  return (
    <div
      className="bg-slate-200 h-screen flex justify-center flex-col"
      onMouseEnter={() => setIsPaused(true)} // Pauses when hovered
      onMouseLeave={() => setIsPaused(false)} // Resumes when hover leaves
    >
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold">
            "{text}"
          </div>
          <div className="max-w-md text-xl font-semibold text-left mt-4">
            {author}
          </div>
          <div className="max-w-md text-sm font-light text-slate-400">
            {designation}
          </div>
        </div>
      </div>
    </div>
  );
};


