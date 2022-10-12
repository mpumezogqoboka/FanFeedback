import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <>
      <Container>
        <Navbar
          style={{ marginBottom: '30px', backgroundColor: '#b85042' }}
          variant="dark"
        >
          <Container className="justify-content-center">
            <Navbar.Brand href="#home">Football Fans Feedback</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
