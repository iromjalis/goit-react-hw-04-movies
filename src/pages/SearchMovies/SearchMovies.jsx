import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { fetchMoviesByQuery } from '../../Service/Api';
import FilmList from '../../components/FilmList/FilmList';
import s from './SearchMovies.module.css';

function SearchMovies() {
  const location = useLocation();
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const storedSearchQuery =
    new URLSearchParams(location.search).get('queryBy') ?? '';

  useEffect(() => {
    if (!storedSearchQuery) {
      return;
    }
    fetchMoviesByQuery(searchQuery).then(setSearchMovies);
  }, [storedSearchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    const searchQuery = e.target.value;
    const response = fetchMoviesByQuery().then(setSearchMovies);

    history.push({
      ...location,
      search: `queryBy=${searchQuery}`,
    });
  };
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <form className={s.SearchMoviesWrapper} onSubmit={handleSubmit}>
        <label>
          <input
            className={s.SearchMoviesWrapper_input}
            onChange={handleChange}
            type="text"
            placeholder="typing movie title..."
            value={searchQuery}
          ></input>
        </label>
        <button type="submit" className={s.Btn}>
          Search
        </button>
      </form>
      <FilmList films={searchMovies} history={history} query={searchQuery} />
    </>
  );
}

SearchMovies.propTypes = {
  // bla: PropTypes.string,
};

SearchMovies.defaultProps = {
  // bla: 'test',
};

export default SearchMovies;
