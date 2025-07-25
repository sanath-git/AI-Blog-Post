import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteButton from "../common/DeleteButton";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getBlogById } from "../../services/blogService"; // Or import getBlogById if available

function BlogView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      try {
        // If you have getBlogById, use that instead of getAllBlogs
        const blog = await getBlogById(id);
        setBlog(blog || null);
      } catch (error) {
        setBlog(null);
        console.error("Error fetching blog:", error.message);
      }
      setLoading(false);
    }
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Blog Not Found</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white px-0 md:px-16 py-8">
      <div className="flex justify-between mb-8 px-4 md:px-0">
        <IconButton
          color="primary"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <DeleteButton blogId={blog.id} icon={false} />
      </div>

      <div className="px-4 md:px-0 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {blog.createdDate ? new Date(blog.createdDate).toLocaleString() : ""}
        </p>
      </div>

      <div className="text-gray-800 text-lg space-y-4 px-4 md:px-0">
        {blog.content.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
}

BlogView.propTypes = {};

export default BlogView;
