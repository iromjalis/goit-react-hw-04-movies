import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from '../FilmList/FilmList.module.css';

const FilmList = ({ films, title }) => {
  const history = useHistory();
  const [movies, setMovies] = useState();

  useEffect(() => {
    setMovies(films);
  }, []);

  return (
    <>
      <h2>{title} </h2>
      <ul className={s.FilmList}>
        {films &&
          films.map(({ title, id, poster_path }) => (
            <li key={id} className={s.FilmList_Item}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    ref: history.location.pathname,
                    search: history.location.search,
                  },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="150"
                  title={title}
                />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

FilmList.propTypes = {
  // bla: PropTypes.string,
};

FilmList.defaultProps = {
  // bla: 'test',
};

export default FilmList;
