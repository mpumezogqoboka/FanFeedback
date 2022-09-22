import Card from 'react-bootstrap/Card';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

function FeedbackItem({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Match Day: {item.matchday}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Fixture: {item.fixture}
        </Card.Subtitle>
        <Card.Text>Comments: {item.text}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default FeedbackItem;
