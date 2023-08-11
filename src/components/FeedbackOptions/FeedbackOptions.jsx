import PropTypes from 'prop-types';

function FeedbackOptios({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default FeedbackOptios;

PropTypes.FeedbackOptios = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
