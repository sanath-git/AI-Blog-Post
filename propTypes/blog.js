import PropTypes from 'prop-types';

export const blogPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  createdAt: PropTypes.string,
});
