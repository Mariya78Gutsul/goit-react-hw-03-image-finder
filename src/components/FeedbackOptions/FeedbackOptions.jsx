import React from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';
import { PropTypes } from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
