// import PropTypes from 'prop-types';
// import React from 'react';
// import { useLocation, matchPath } from 'react-router-dom';

// function Header({ blogs }) {
//   const location = useLocation();
//   let pageTitle = 'AI Blog Generator';
//   const match = matchPath('/blog/:id', location.pathname);
//   if (match && match.params && match.params.id) {
//     const blog = blogs.find(b => String(b.id) === match.params.id);
//     if (blog) pageTitle = blog.title;
//   }
//   return (
//     <></>
//   );
// }


// Header.propTypes = {
//     blogs: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         title: PropTypes.string.isRequired,
//         content: PropTypes.string,
//         createdAt: PropTypes.string,
//       })
//     ).isRequired
//   };
// export default Header; 
