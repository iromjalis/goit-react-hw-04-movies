import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesReviewById } from '../../Service/Api';
import s from '../Cast/Cast';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviewById(id).then(r => setReviews(r));
  }, [id]);

  return (
    <div className={s.ReviewsWrapper}>
      {reviews.map(({ author, content }) => (
        <>
          {reviews ? (
            <div className={s.ReviewsWrapper_Card}>
              <p>
                <b>
                  <u>{author}:</u>
                </b>
                &ensp;{content}
              </p>
            </div>
          ) : (
            <p>'No reviews'</p>
          )}
        </>
      ))}
    </div>
  );
};

Reviews.propTypes = {
  // bla: PropTypes.string,
};

Reviews.defaultProps = {
  // bla: 'test',
};

export default Reviews;
