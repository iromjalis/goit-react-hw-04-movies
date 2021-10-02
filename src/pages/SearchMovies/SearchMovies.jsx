import React from 'react';
import PropTypes from 'prop-types';
import Searchbar from '../../components/Searchbar/Searchbar';
//import { Test } from './SearchMovies.styles';

const SearchMovies = props => (
  <div className="SearchMoviesWrapper">
    <h1>SearchMovies</h1>
    <Searchbar />
  </div>
);

SearchMovies.propTypes = {
  // bla: PropTypes.string,
};

SearchMovies.defaultProps = {
  // bla: 'test',
};

export default SearchMovies;
