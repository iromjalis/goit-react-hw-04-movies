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
  componentDidMount() {
    api.fetchPopularMovies().then(r => this.setState({ films: r }));
  }

  render() {
    const { films, query } = this.state;
    return (
      <div className="HomeWrapper">
        {films && <FilmList history={this.props.history} films={films} />}
      </div>
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
