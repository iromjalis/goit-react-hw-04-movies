import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Reviews from '../../components/Reviews/Reviews';
import Cast from '../../components/Cast/Cast';
import { NavLink, Link } from 'react-router-dom';
import Api from '../../Service/Api';
import styles from './MovieDetails.module.css';

class Moviedetails extends Component {
  url = this.props.match.url;
  state = {
    film: {},
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id });
    const response = await Api.fetchMoviesById(id);
    this.setState({ film: response });
  }
  handleGoBack = () => {
    const from = this.props.history.push(this.props.location.state.from, {
      query: this.props.location.state.query,
    });
  };
  render() {
    const { film } = this.state;
    const { title, overview, poster_path } = film;
    return (
      <>
        <p>
          <button onClick={this.handleGoBack}>Go Back</button>
        </p>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
          width="450"
        />
        <h3>{title}</h3>
        <p>{overview} </p>
        <hr />
        <div className={styles.CastAndReviewsBtn}>
          <Link
            to={{
              pathname: `${this.props.match.url}/cast`,
              state: this.props.location.state,
            }}
            className={styles.CastBtn}
          >
            Cast
          </Link>
          <Link
            to={{
              pathname: `${this.props.match.url}/reviews`,
              state: this.props.location.state,
            }}
            className={styles.ReviewsBtn}
          >
            Review
          </Link>
        </div>

        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
      </>
    );
  }
}
export default Moviedetails;
