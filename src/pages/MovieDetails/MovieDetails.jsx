import {
  useParams,
  Link,
  Route,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { fetchMoviesById } from '../../Service/Api';
import styles from './MovieDetails.module.css';
import { useEffect, useState, lazy } from 'react';
import { Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

function Moviedetails() {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const [film, setFilm] = useState({});
  const { title, poster_path, overview } = film;
  const { ref, search } = history.location.state;

  useEffect(() => {
    const response = fetchMoviesById(id).then(r => setFilm(r));
  }, [id]);

  return (
    <>
      <p>
        <Link to={`${ref}${search}` ? `${ref}${search}` : '/'}>
          <button type="button">Go back</button>
        </Link>
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
            pathname: `${url}/cast`,
            state: {
              ref: ref,
              search: search,
            },
          }}
          className={styles.CastBtn}
        >
          Cast
        </Link>
        <Link
          to={{
            pathname: `${url}/reviews`,
            state: {
              ref: ref,
              search: search,
            },
          }}
          className={styles.ReviewsBtn}
        >
          Review
        </Link>
      </div>
      <Switch>
        <Route path={`${path}/reviews`} component={Reviews} />
        <Route path={`${path}/cast`} component={Cast} />
      </Switch>
    </>
  );
}
export default Moviedetails;
