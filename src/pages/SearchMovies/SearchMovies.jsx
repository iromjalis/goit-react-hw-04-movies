import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import Api from '../../Service/Api';
import FilmList from '../../components/FilmList/FilmList';
//import { Test } from './SearchMovies.styles';

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
    Api.fetchMoviesByQuery(storedSearchQuery).then(({ results }) => {
      setSearchMovies(results);
    });
  }, [storedSearchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    await Api.fetchMoviesByQuery(searchQuery).then(res => setSearchMovies(res));
    if (searchQuery.trim() === '') {
      return;
    }
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
      <form className="SearchMoviesWrapper" onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="typing movie title..."
            value={searchQuery}
          ></input>
        </label>
        <button type="submit">Search</button>
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
