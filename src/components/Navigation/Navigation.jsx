import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  NavigationWrapper,
  Navigation_list,
  Navigation_item,
} from './Navigation.module.css';

const Navigation = props => (
  <div className={NavigationWrapper}>
    <ul className={Navigation_list}>
      <li className={Navigation_item}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={Navigation_item}>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
  </div>
);

Navigation.propTypes = {
  // bla: PropTypes.string,
};

Navigation.defaultProps = {
  // bla: 'test',
};

export default Navigation;
