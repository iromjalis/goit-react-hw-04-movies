import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../Service/Api';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import FilmList from '../../components/FilmList/FilmList';
//import { Test } from './Home.styles';

function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(r => setFilms(r));
  }, []);

  return (
    <>
      <h2>Popular movies are: </h2>
      {films && <FilmList films={films} />}
    </>
  );
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
