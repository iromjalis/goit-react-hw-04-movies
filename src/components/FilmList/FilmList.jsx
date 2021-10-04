import React from 'react';
import PropTypes from 'prop-types';
import FilmListItem from './FilmListItem';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import { NavLink } from 'react-router-dom';

//import { Test } from './FilmList.styles';

const FilmList = ({ films, linkToHome, history, query }) => {
  return (
    <ul>
      {films.map(({ title, id }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { id, from: history.location.pathname, query },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  // bla: PropTypes.string,
};

FilmList.defaultProps = {
  // bla: 'test',
};

export default FilmList;
