import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, deleteCard }) {
  if (!feedback || feedback.length === 0) {
    return <p className="text-center">No fan feedback yet!</p>;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} deleteCard={deleteCard} />
      ))}
    </div>
  );
}

export default FeedbackList;
