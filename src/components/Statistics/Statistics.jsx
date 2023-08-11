import PropTypes from 'prop-types';

function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <ul>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>TotalFeedback: {total}</span>
      </li>
      <li>
        <span>Positive feedback: {positivePercentage}%</span>
      </li>
    </ul>
  );
}
export default Statistics;

PropTypes.Statistics = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
