import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <div className="App">
      <Header />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
