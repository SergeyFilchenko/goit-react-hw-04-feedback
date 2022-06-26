import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import NotificationMessage from 'components/NotificationMessage/NotificationMessage';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // updateQuantityFeedbeacks = e => {
  //   const key = e.target.id;
  //   this.setState(ps => ({ [key]: ps[key] + 1 }));
  // };
  const updateQuantityFeedbeacks = e => {
    switch (e.target.id) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  // countTotalFeedback = () =>
  //   Object.values(this.state).reduce((acc, value) => acc + value, 0);

  const countTotalFeedback = () =>
    Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0
    );

  // countPositiveFeedbackPercentage = total =>
  //   `${Math.round((this.state.good / total) * 100)}%`;

  // const { good, neutral, bad } = this.state;

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    `${Math.round((good / total) * 100)}%`;

  // const {
  //   updateQuantityFeedbeacks,
  //   countTotalFeedback,
  //   countPositiveFeedbackPercentage,
  // } = this;

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

export default App;
