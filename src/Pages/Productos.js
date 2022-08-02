import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Modal from '../Components/Modal'





import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import ProductCard from '../Components/PorductCard';
import FormularioProducto from '../Components/FormularioProducto' 


function Productos(children) {


  const [modalShow, setModalShow] = React.useState(false);


  const [listaProductos, setListaProductos] = useState(null)




  const urlBase = "http://localhost:8080/api/prueba/"


  useEffect(() => {
    fetch(`${urlBase}productos/buscartodos`)
      .then(res => res.json())
      .then(res => setListaProductos(res.data))

    console.log(listaProductos)
  }, [listaProductos]);


  function eliminarProducto(id) {
    fetch(`${urlBase}productos/eliminar/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => setListaProductos(res.data))
      console.warn()
    
  }

  return (
    <div>
      <main>
        <h2>Productos</h2>
        <br />
        <Button onClick={() => setModalShow(true)} className="btn-success">Agregar Producto</Button>
        <br />
        <br />
        <Container>

          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
          ><FormularioProducto/></Modal>
          {listaProductos  && <Container>
            <Row className="justify-content-center align-items-center">
              {listaProductos.map((producto) => (


                <Col md={4} key={producto.id}>
                  <ProductCard
                    producto={producto.nombre}
                    title={producto.nombre}
                    image={producto.imagen}
                  >
                      {/* {producto.descripcion}   */}
                      <p>$ {producto.precio}</p>
                      <p>{producto.cantidad} Disponibles</p>
                    <Stack className=" mx-auto">
                      <Container md={12}><Button className="btn-success" size="sm">Agregar al carrito</Button></Container>
                      <br/>
                      <Container md={4} mb={3}> <Button className="btn-info" size="sm" onClick={() => setModalShow(true)}>Editar</Button></Container>
                      <br/>
                      <Container md={6} ><Button className="btn-danger" size="sm" onClick={()=> eliminarProducto(producto.id) }>Eliminar</Button></Container>                          
                        
                    </Stack>
                  </ProductCard>
                  <br />


                </Col>)

              )}
            </Row>
          </Container>
          }






        </Container>
      </main>

    </div>
  );
}

export default Productos;