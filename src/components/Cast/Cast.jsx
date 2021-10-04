import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import Api from '../../Service/Api';
//import { Test } from './Cast.styles';

const Cast = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const id = history.location.state.id;
    Api.fetchMoviesCastById(id).then(setCast);
  }, [id]);
  return (
    <div className="CastWrapper">
      {cast.map(({ name, profile_path }) => (
        <>
          {profile_path !== null && (
            <>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="poster"
                  width="150"
                />
              </p>
              <p>Name: {name} </p>
            </>
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
