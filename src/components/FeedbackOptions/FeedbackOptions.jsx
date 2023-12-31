import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

function FeedbackOptios({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
}
export default FeedbackOptios;

PropTypes.FeedbackOptios = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
