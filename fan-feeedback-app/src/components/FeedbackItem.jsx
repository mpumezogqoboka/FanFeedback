import Card from 'react-bootstrap/Card';
import { FaTrash } from 'react-icons/fa';

function FeedbackItem({ item, deleteCard, textColor, font }) {
  const cardStyles = {
    color: textColor,
    fontFamily: font,
  };

  return (
    <Card
      className="shadow-sm"
      style={{ width: '18rem', margin: '20px 0px', backgroundColor: '#a7beae' }}
    >
      <Card.Body style={cardStyles}>
        <Card.Title>Match Day: {item.matchday}</Card.Title>
        <Card.Subtitle className="mb-2">Fixture: {item.fixture}</Card.Subtitle>
        <Card.Text>Comments: {item.text}</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>Rating: {item.rating} </Card.Text>

          <FaTrash
            style={{ color: '#b85042', fontSize: '1.3rem' }}
            onClick={() => deleteCard(item.id)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

FeedbackItem.defaultProps = {
  textColor: '#fff',
  font: 'Poppins',
};

export default FeedbackItem;
