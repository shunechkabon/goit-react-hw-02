import { useState, useEffect } from 'react'
import Description from './Description'
import Options from './Options'
import Feedback from './Feedback'
import Notification from './Notification'
import './App.css'

function App() {
  const getInitialFeedback = () => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback ? savedFeedback : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(getInitialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} onReset={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} positivePercentage={positiveFeedbackPercentage} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  )
}

export default App
