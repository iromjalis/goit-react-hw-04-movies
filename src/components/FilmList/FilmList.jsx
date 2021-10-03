import React from 'react';
import PropTypes from 'prop-types';
import FilmListItem from './FilmListItem';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';

//import { Test } from './FilmList.styles';

const FilmList = ({ films, linkToHome, history, query }) => (
  <ul>
    {films.map(el => (
      <MovieDetails
        query={query}
        history={history}
        linkToHome={linkToHome}
        key={el.id}
        id={el.id}
        title={el.title}
      />
    ))}
  </ul>
);

FilmList.propTypes = {
  // bla: PropTypes.string,
};

FilmList.defaultProps = {
  // bla: 'test',
};

export default FilmList;
