import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

function CategoryCard(props, { children }) {
  return (
    <Card style={{ width: '300px', height: '350px' }}>

        <Col style={{ width: '100%', height: '250px' }} ><Card.Img variant="top" src={props.image} /></Col>
      <Col>
        <Card.Body>
          <Card.Title >{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Col>{props.children}</Col>
        </Card.Body>
</Col>


    </Card>

  );
}

export default CategoryCard;