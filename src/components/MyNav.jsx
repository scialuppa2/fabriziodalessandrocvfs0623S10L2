import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavbar = (props) => {
    return(
       <Navbar collapseOnSelect expand="lg" className="bg-secondary">
          <Container fluid>
            <Navbar.Brand href="#home">
                Libreria
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ms-auto'>
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#browse">BROWSE</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
       </Navbar> 
    )
}

export default MyNavbar;