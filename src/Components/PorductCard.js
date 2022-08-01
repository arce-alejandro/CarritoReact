import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ProductCard(props, { children }) {
  return (

    <Row xs={1} md={4} className="g-4">
    <Card style={{ width: '300px' , height: 'Auto'}} className="text-center">

      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={`productos/${props.categoria}`}>
        <Col style={{ width: '100%' , height: 'Auto'}} ><Card.Img variant="top" src={props.image} /></Col>
      </Link>

      <Card.Body>
        <Card.Title >{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
        
        {props.children}
       
        </Card.Text>
      </Card.Body>



    </Card>
</Row>
  );
}

export default ProductCard;