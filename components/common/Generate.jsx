import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { createBlog } from "../../services/blogService";
import PropTypes from "prop-types";
function Generate({ refreshBlogs }) {
  const [topic, setTopic] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const generateBlog = async () => {
    if (!topic) return;
    setLoading(true);
    await createBlog({ topic });
    setTopic("");
    setLoading(false);
    refreshBlogs();
  };

  return (
    <div className="w-screen h-[500px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex flex-col gap-20 items-center px-4 py-10">
      {/* Title and description */}
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold mb-2">AI Blog Generator</h1>
        <p className="text-lg">
          Transform your ideas into engaging blog posts with AI
        </p>
      </div>

      {/* Input and button */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-4 px-6 py-6 bg-white/10 backdrop-blur-md rounded-lg">
        <input
          className="w-full px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Enter your blog topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button
          className="w-full px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold shadow-sm
             hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300
             disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all
             flex items-center justify-center gap-2"
          disabled={!topic || loading}
          onClick={generateBlog}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></span>
              Generating...
            </span>
          ) : (
            <>
              <AutoAwesomeIcon fontSize="small" />
              Generate Blog Post
            </>
          )}
        </button>
      </div>
    </div>
  );
}

Generate.propTypes = {
  refreshBlogs: PropTypes.func,
};

export default Generate;
