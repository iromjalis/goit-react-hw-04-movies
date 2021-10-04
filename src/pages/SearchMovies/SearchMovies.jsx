import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import Api from '../../Service/Api';
import FilmList from '../../components/FilmList/FilmList';
//import { Test } from './SearchMovies.styles';

class SearchMovies extends Component {
  state = {
    query: '',
    films: [],
  };
  async componentDidMount() {
    if (this.props.location.state !== null) {
      const response = await Api.fetchMoviesByQuery(
        this.props.location.state.query,
      );
      this.setState({ query: this.props.location.state.query });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    await Api.fetchMoviesByQuery(this.state.query).then(res =>
      this.setState({ films: res }),
    );
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    const { query } = this.state;
    return (
      <>
        <form className="SearchMoviesWrapper" onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="typing movie title..."
              value={query}
            ></input>
          </label>
          <button type="submit">Search</button>
        </form>
        <FilmList
          films={this.state.films}
          history={this.props.history}
          query={query}
        />
      </>
    );
  }
}

SearchMovies.propTypes = {
  // bla: PropTypes.string,
};

SearchMovies.defaultProps = {
  // bla: 'test',
};

export default SearchMovies;
