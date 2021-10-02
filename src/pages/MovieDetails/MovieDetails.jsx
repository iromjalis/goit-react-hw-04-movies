import React from 'react';
import PropTypes from 'prop-types';
import FilmListItem from '../../components/FilmList/FilmListItem';
import { Route } from 'react-router';
import Review from '../../components/Reviews/Reviews';
import Cast from '../../components/Cast/Cast';
import { NavLink } from 'react-router-dom';
//import { Test } from './MovieDetails.styles';

const MovieDetails = props => {
  console.log(props.match.url);
  return (
    <>
      <h1>MovieDetails</h1>
      <FilmListItem id={props.match.params.id} />

      <NavLink
        to={{
          pathname: `${props.match.url}/reviews`,
          // state: this.props.history.location.state,
        }}
      >
        <button>Review</button>
      </NavLink>
      <NavLink
        to={{
          pathname: `${props.match.url}/cast`,
          // state: this.props.history.location.state,
        }}
      >
        <button>Cast</button>
      </NavLink>
      <Route component={Review} />
      <Route component={Cast} />
    </>
  );
};

MovieDetails.propTypes = {
  // bla: PropTypes.string,
};

MovieDetails.defaultProps = {
  // bla: 'test',
};

export default MovieDetails;
