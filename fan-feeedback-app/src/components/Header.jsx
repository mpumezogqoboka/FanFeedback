import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Football Fans Feedback</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
