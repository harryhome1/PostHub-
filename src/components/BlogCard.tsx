import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`} className="group">
            <div className="p-6 border border-slate-300 rounded-lg shadow-lg bg-white w-screen max-w-screen-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50">
                <div className="flex items-center">
                    <Avatar name={authorName} />
                    <div className="font-light pl-3 text-sm text-slate-700 flex flex-col justify-center">
                        <span className="font-medium text-slate-800">{authorName}</span>
                        <div className="flex items-center text-xs text-slate-500">
                            {publishedDate}
                            <Circle />
                            {`${Math.ceil(content.length / 100)} min read`}
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-bold pt-4 text-slate-900 group-hover:text-indigo-600">
                    {title}
                </div>
                <div className="text-md font-light text-slate-600 pt-2 leading-relaxed">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-xs font-light pt-4">
                    <span className="italic">{`${Math.ceil(content.length / 100)} minute(s) read`}</span>
                </div>
            </div>
        </Link>
    );
};

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400 mx-2"> </div>;
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-700 rounded-full ${size === "small" ? "w-8 h-8" : "w-12 h-12"} shadow-lg`}>
            <span className={`${size === "small" ? "text-sm" : "text-lg"} font-light text-white`}>
                {name[0]}
            </span>
        </div>
    );
}
