import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="App">
      <Header />
      <FeedbackList feedback={feedback} deleteCard={deleteFeedback} />
    </div>
  );
}

export default App;
