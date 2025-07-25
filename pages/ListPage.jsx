import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Generate from "../components/common/Generate";
import BlogList from "../components/Blog/BlogList";
import { blogPropType } from "../propTypes/blog";
import { getAllBlogs } from "../services/blogService";

function ListPage({ deleteBlog }) {
  const [blogs, setBlogs] = useState([]);
  const [reloadFlag, setReloadFlag] = useState(false);

  useEffect(() => {
    getAllBlogs()
      .then((blogs) => setBlogs(blogs))
      .catch((err) => console.error("Error fetching blogs:", err.message));
  }, [reloadFlag]);

  const refreshBlogs = () => setReloadFlag((f) => !f);

  return (
    <>
      <div className="flex flex-col items-center w-full max-w-xl mx-auto mb-6">
        <Generate refreshBlogs={refreshBlogs} />
      </div>
      <BlogList blogs={blogs} setBlogs={setBlogs} deleteBlog={deleteBlog} />
    </>
  );
}

ListPage.propTypes = {
  blogs: PropTypes.arrayOf(blogPropType).isRequired,
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired,
  setBlogs: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

export default ListPage;
