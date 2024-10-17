import { useState } from "react";
import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const [showAuthor, setShowAuthor] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-16">
                    {/* Blog Content */}
                    <div className="col-span-8 pr-8">
                        <div className="text-5xl font-extrabold text-gray-800 leading-tight">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2 text-sm">
                        <div className="text-slate-500 pt-2 text-sm">
                        Posted on <span className="font-medium">
                            {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            timeZone: 'Asia/Kolkata'
                            })}
                        </span>
                        </div>
                        </div>
                        <div className="pt-6 leading-relaxed text-lg text-gray-700">
                            {blog.content}
                        </div>
                    </div>

                    {/* Author Section - Hidden on small screens */}
                    <div className="col-span-4 pl-8 border-l border-gray-200 hidden md:block">
                        <div className="text-slate-600 text-lg font-semibold">Author</div>
                        <div className="flex w-full mt-4 bg-white shadow-lg rounded-lg p-4 items-center">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.autherName || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-800">
                                    {blog.autherName || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500 text-sm italic">
                                    Grabbing your attention, holding your curiosity.
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 text-gray-600 leading-7">
                            <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                            <p>
                            The author is a passionate writer and storyteller with a deep love for exploring the intricacies of human nature through words. With experience in journalism and creative writing, they have spent years crafting compelling narratives, ranging from thought-provoking blog posts to immersive fiction. The author believes that stories have the power to inspire, challenge, and bring people together across different walks of life.
                            </p>
                        </div>
                    </div>

                    {/* Small Screen Author Section */}
                    <div className="col-span-12 mt-6 md:hidden">
                        <button
                            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                            onClick={() => setShowAuthor(!showAuthor)}
                        >
                            {showAuthor ? "Hide Author" : "Show Author"}
                        </button>

                        {showAuthor && (
                            <div className="mt-4 bg-white shadow-lg rounded-lg p-4">
                                <div className="text-slate-600 text-lg font-semibold">Author</div>
                                <div className="flex w-full mt-4 items-center">
                                    <div className="pr-4 flex flex-col justify-center">
                                        <Avatar size="big" name={blog.autherName || "Anonymous"} />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-gray-800">
                                            {blog.autherName || "Anonymous"}
                                        </div>
                                        <div className="pt-2 text-slate-500 text-sm italic">
                                            Grabbing your attention, holding your curiosity.
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-gray-600 leading-7">
                                    <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                                    <p>
                                    The author is a passionate writer and storyteller with a deep love for exploring the intricacies of human nature through words. With experience in journalism and creative writing, they have spent years crafting compelling narratives, ranging from thought-provoking blog posts to immersive fiction. The author believes that stories have the power to inspire, challenge, and bring people together across different walks of life.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};




