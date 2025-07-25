import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BlogCard from "./BlogCard";
import { blogPropType } from "../../propTypes/blog";
import { getAllBlogs } from "../../services/blogService";

function BlogList({ blogs, setBlogs }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = search ? { search } : {};
    getAllBlogs(params)
      .then((results) => {
        setBlogs(results);
      })
      .catch(() => setBlogs([]));
  }, [search]);

  return (
    <div className="w-full px-4 md:px-8 py-8 bg-gray-50">
      <div className="flex flex-col items-start mb-8">
        {/* Search Bar */}
        <div className="flex justify-center w-full mb-4">
          <input
            type="text"
            className="w-full max-w-md px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white shadow"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Your Blog Posts
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Click on any post to read the full article
        </p>
      </div>

      {/* Blog Cards */}
      {blogs.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center py-16 text-gray-400">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/>
            <path stroke="currentColor" strokeWidth="2" d="M8 11h8M8 15h6"/>
          </svg>
          <p className="mt-4 text-lg">No blog posts found.</p>
        </div>
      ) : (
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </ul>
      )}
    </div>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(blogPropType).isRequired,
  setBlogs: PropTypes.func.isRequired,
};

export default BlogList;
