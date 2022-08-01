import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function NavBar(props) {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="light">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="me-auto">
        <Container mr="6" ><Link to={"/categorias"}><Button variant="outline-info">Categorias</Button></Link> </Container>
          
          <Container ><Link to={"/productos"}><Button variant="outline-primary">Porductos</Button></Link> </Container>
          </Nav>
          <Nav>
          <Container className="d-flex"><Link to="/carrito"><Button variant="outline-warning">Carrrito</Button></Link></Container>  

          </Nav>
        </Container>
        
      </Navbar>
      <br/>
    
      
    </>
  );
}

export default NavBar;