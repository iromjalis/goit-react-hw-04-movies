import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Review from '../../components/Reviews/Reviews';
import Cast from '../../components/Cast/Cast';
import { NavLink, Link } from 'react-router-dom';
import Api from '../../Service/Api';
//import { Test } from './MovieDetails.styles';

// query={query}
//         history={history}
//         linkToHome={linkToHome}
//         key={el.id}
//         id={el.id}
//         title={el.title}

class MovieDetails extends Component {
  imageUrl = `https://image.tmdb.org/t/p/w500`;
  // id = this.props.match.params.id;
  // id = this.props.location;
  // url = this.props.match.url;

  state = { film: {} };
  //console.log(props.match.url);
  async componentDidMount() {
    const id = this.props.id;

    await Api.fetchMoviesById(id).then(r => this.setState({ film: r }));
  }
  handleGoBack = () => {
    this.props.history.push(this.props.location.from);
  };

  render() {
    const { title, tagline, overview, homepage, poster_path } = this.state.film;
    console.log("MD", this.props);
    return (
      <>
        <p>
          <button onClick={this.handleGoBack}>Go back </button>
        </p>
        <Link
          key={this.props.id}
          to={{
            pathname: `/movies/${this.props.id}`,
            state: {
              //   search: this.props.query !== undefined ? this.props.query : '',
              //id: this.props.film.id,
              from: this.props.history.location.pathname,
            },
          }}
        >
          {this.state.film && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster"
                width="450"
              />
              <h3>{title}</h3>
              <p>{overview} </p>
            </>
          )}
        </Link>
        <NavLink
          to={{
            pathname: `${this.url}/reviews`,
            // state: this.props.history.location.state,
          }}
        >
          <button>Review</button>
        </NavLink>
        <NavLink
          to={{
            pathname: `${this.url}/cast`,
            // state: this.props.history.location.state,
          }}
        >
          <button>Cast</button>
        </NavLink>
        <Route component={Review} />
        <Route component={Cast} />
      </>
    );
  }
}

MovieDetails.propTypes = {
  // bla: PropTypes.string,
};

MovieDetails.defaultProps = {
  // bla: 'test',
};

export default MovieDetails;
