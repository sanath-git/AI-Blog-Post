import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPage from "../pages/ListPage";
import ViewPage from "../pages/ViewPage";
import PropTypes from "prop-types";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route
        path="/blog/:id"
        element={<ViewPage />}
      />
    </Routes>
  );
}

MainRoutes.propTypes = {
  blogs: PropTypes.array.isRequired,
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired,
  setBlogs: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

export default MainRoutes;
