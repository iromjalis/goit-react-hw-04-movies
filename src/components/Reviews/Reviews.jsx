import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import Api from '../../Service/Api';
//import { Test } from './Cast.styles';

const Cast = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const [review, setReview] = useState([]);
  useEffect(() => {
    const id = history.location.state.id;
    Api.fetchMoviesReviewById(id).then(setReview);
  }, [id]);
  return (
    <div className="CastWrapper">
      {review.map(({ author, content }) => (
        <p>
          <b>
            <u>{author}</u>
          </b>
          : {content}
        </p>
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
