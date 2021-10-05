import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularMovies } from '../../Service/Api';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import FilmList from '../../components/FilmList/FilmList';
//import { Test } from './Home.styles';

function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(setFilms);
  }, []);

  return <>{films && <FilmList films={films} title="Popular movies are:" />}</>;
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
