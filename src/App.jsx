import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import NotificationMessage from 'components/NotificationMessage/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateQuantityFeedbeacks = e => {
    const key = e.target.id;
    this.setState(ps => ({ [key]: ps[key] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = total =>
    `${Math.round((this.state.good / total) * 100)}%`;

  render() {
    const { good, neutral, bad } = this.state;

    const {
      updateQuantityFeedbeacks,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const total = countTotalFeedback();

    return (
      <div>
        <Section title="Please leave FeedBack">
          <FeedbackOptions
            options={this.state}
            onLeaveFeeedback={updateQuantityFeedbeacks}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
