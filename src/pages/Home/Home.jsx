import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../Service/Api';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import FilmList from '../../components/FilmList/FilmList';
//import { Test } from './Home.styles';

class Home extends Component {
  state = {
    films: [],
    query: '',
  };
  async componentDidMount() {
    const response = await api.fetchPopularMovies();
    this.setState({ films: response });
  }

  render() {
    const { films, query } = this.state;
    return (
      <>
        <h2>Popular movies are: </h2>
        {films && (
          <FilmList
            history={this.props.history}
            films={films}
            linkToHome={this.props.location.pathname}
          />
        )}
      </>
    );
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
