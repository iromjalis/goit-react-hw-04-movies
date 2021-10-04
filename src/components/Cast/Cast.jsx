import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import Api from '../../Service/Api';
import s from './Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    Api.fetchMoviesCastById(id).then(setCast);
  }, [id]);

  return (
    <div className={s.CastWrapper}>
      {cast.map(({ name, profile_path }) => (
        <>
          {profile_path !== null && (
            <div className={s.CastWrapper_Card}>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="poster"
                  width="150"
                />
              </p>
              <p> {name} </p>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

Cast.propTypes = {
  // bla: PropTypes.string,
};

Cast.defaultProps = {
  // bla: 'test',
};

export default Cast;
