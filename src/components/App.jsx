import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptios from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import { AppSection } from './App.styled';
import { GlobalStyle } from './GlobalStyled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedback = Math.round(
      (good / this.countTotalFeedback()) * 100
    );
    if (positiveFeedback === 0) {
      return '0';
    } else {
      return positiveFeedback;
    }
  };

  render() {
    const { good, bad, neutral } = this.state;
    const feedback = Object.keys(this.state);

    return (
      <AppSection>
        <Section title="Please leave your feedback">
          <FeedbackOptios
            options={feedback}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback for this moment" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        <GlobalStyle />
      </AppSection>
    );
  }
}
