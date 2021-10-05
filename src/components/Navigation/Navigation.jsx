import React from 'react';
// import PropTypes from 'prop-types';
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
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
        >
          <h1>𝐻𝑜𝓂𝑒</h1>
        </NavLink>
      </li>
      <li className={Navigation_item}>
        <NavLink
          exact
          to="/movies"
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
        >
          <h1>𝑀𝑜𝓋𝒾𝑒𝓈</h1>
        </NavLink>
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
