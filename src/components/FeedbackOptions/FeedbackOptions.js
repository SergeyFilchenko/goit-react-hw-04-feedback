import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeeedback }) {
  return (
    <div>
      <ul className={s.list}>
        {Object.keys(options).map(key => (
          <li key={key} className={s.item}>
            <button
              className={s.button}
              type="button"
              onClick={onLeaveFeeedback}
              id={key}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.shape({
    good: propTypes.number.isRequired,
    neutral: propTypes.string.isRequired,
    bad: propTypes.string.isRequired,
  }),
  onLeaveFeeedback: propTypes.func.isRequired,
};
