import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Searchbar.styles';

const Searchbar = props => (
  <div className="SearchbarWrapper">
    <form>
      <label>
        Searchbar
        <input placeholder="typing movie title..."></input>
      </label>
      <button type="submit">Search</button>
    </form>
  </div>
);

Searchbar.propTypes = {
  // bla: PropTypes.string,
};

Searchbar.defaultProps = {
  // bla: 'test',
};

export default Searchbar;
