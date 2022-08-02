import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

function FormularioProducto(props) {

    const urlBase = "http://localhost:8080/api/prueba/"

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [imagen, setImagen] = useState('');
    const [show, setShow] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        const productos = { nombre, imagen, descripcion, precio, cantidad };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productos)
        };


        fetch(`${urlBase}productos/guardar`, requestOptions)
            .then(() => {
                console.log(productos)
                console.log("Categoria creada")
                setShow(true)
                

            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre del Producto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Taladro, Televisor"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <Form.Text className="text-muted">
                </Form.Text>

                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Descripcion del producto"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="20.000"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="5"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                />
                <Form.Label>Imagendel Producto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="https://unsplash.com/es/fotos/"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                />
                <br/>
                <Form.Select aria-label="Default select example">
                    <option>Categorias</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

          
   { show && 
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Producto Guardado con exito</Alert.Heading>
        
      </Alert>}
    
  

            <Button variant="primary" type="submit">
                Guardar
            </Button>

           
        </Form>
    );
}

export default FormularioProducto;