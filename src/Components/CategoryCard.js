import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CategoryCard(props, { children }) {
  return (
    <Card style={{ width: '20rem' }}>

      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={`productos/${props.categoria}`}>
        <Card.Img variant="top" src={props.image} />
      </Link>

      <Card.Body>
        <Card.Title >{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Col>{props.children}</Col>
      </Card.Body>



    </Card>

  );
}

export default CategoryCard;