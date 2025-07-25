import PropTypes from 'prop-types';
import React from 'react';
import { blogPropType } from '../propTypes/blog';
import BlogView from '../components/Blog/BlogView';

function ViewPage({ blogs, deleteBlog }) {
  return <BlogView blogs={blogs} deleteBlog={deleteBlog} />;
}

ViewPage.propTypes = {
  blogs: PropTypes.arrayOf(blogPropType).isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

export default ViewPage;
