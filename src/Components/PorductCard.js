import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function ProductCard(props, { children }) {
  return (

    <Row xs={1} md={4} className="g-3">
    <Card style={{ width: '200px' , height: '450px'}} className="text-center">

        <Col style={{ width: '100%' , height: '150px'}} ><Card.Img variant="top" src={props.image} /></Col>
      
    <Col>
      <Card.Body>
        <Card.Title >{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
        
        {props.children}
       
        </Card.Text>
      </Card.Body></Col>



    </Card>
</Row>
  );
}

export default ProductCard;