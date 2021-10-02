import React from 'react';
import PropTypes from 'prop-types';
import FilmListItem from './FilmListItem';

//import { Test } from './FilmList.styles';

const FilmList = ({ films, linkToHome, history, query }) => (
  <div className="FilmListWrapper">
    <h2>FilmList</h2>
    <ul>
      {films.map(el => (
        <FilmListItem
          query={query}
          history={history}
          linkToHome={linkToHome}
          key={el.id}
          id={el.id}
          title={el.title}
        />
      ))}
    </ul>
  </div>
);

FilmList.propTypes = {
  // bla: PropTypes.string,
};

FilmList.defaultProps = {
  // bla: 'test',
};

export default FilmList;
