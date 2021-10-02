import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NotFound.styles';

const NotFound = props => (
  <div className="NotFoundWrapper">
    <h1>NotFound</h1>404 - page not found
  </div>
);

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;
