import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'


function FormularioCategorias() {

  const urlBase = "http://localhost:8080/api/prueba/"

  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [show, setShow] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();
    const categoria = { nombre, imagen };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoria)
    };


    fetch(`${urlBase}categorias/guardar`, requestOptions)
      .then(() => {
        console.log(categoria)
        console.log("Categoria creada")
      })
      setShow(true)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre categoria</Form.Label>
        <Form.Control
          type="text"
          placeholder="Hogar, Tecnologia,"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Form.Text className="text-muted">
        </Form.Text>

        <Form.Label>URL imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://unsplash.com/es/fotos/"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        Copia y pega la URL de la imagen deseada
      </Form.Group>
      {show &&
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Producto Guardado con exito</Alert.Heading>

        </Alert>}

      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
}

export default FormularioCategorias;