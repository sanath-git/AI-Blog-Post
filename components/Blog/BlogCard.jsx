import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../common/DeleteButton";
import { blogPropType } from "../../propTypes/blog";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <li
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer flex flex-col justify-between min-h-[260px]"
      onClick={handleCardClick}
    >
      {/* Title & Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.content}
        </p>
      </div>

      {/* Date & Delete Button */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
            : ""}
        </span>
        <DeleteButton blogId={blog.id} sx={{ padding: 0, minWidth: 0 }} />
      </div>
    </li>
  );
}

BlogCard.propTypes = {
  blog: blogPropType.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BlogCard;
