import React from 'react'
import Row from 'react-bootstrap/Row';
import Modal from '../Components/Modal'





import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import CategoryCard from '../Components/CategoryCard';
import Formulario from '../Components/FormularioCategorias';


function Categorias(children) {


  const [modalShow, setModalShow] = React.useState(false);


  const [listaCategorias, setListaCategorias] = useState(null)




  const urlBase = "http://localhost:8080/api/prueba/"


  useEffect(() => {
    fetch(`${urlBase}categorias/buscartodos`)
      .then(res => res.json())
      .then(res => setListaCategorias(res.data))

    console.log(listaCategorias)
  }, [listaCategorias]);

  return (
    <div>
      <main>
        <h2>Categorias</h2>
        <br />
        <Button onClick={() => setModalShow(true)} className="btn-success">Agregar Categoria</Button>
        <br />
        <Container>

          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
          ><Formulario/></Modal>
          {listaCategorias && <Container>
            <Row className="justify-content-center align-items-center">
              {listaCategorias.map((categoria) => (


                <Col md={4} key={categoria.id}>
                  <CategoryCard
                    categoria={categoria.nombre}
                    title={categoria.nombre}
                    image={categoria.imagen}
                  >
                    <Row className="justify-content-space-around align-items-center">
                      <Col md={6}>
                        <Button className="btn-info" onClick={() => setModalShow(true)}>Editar</Button>
                      </Col>
                      
                      <Col md={6}>
                        <Button className="btn-danger">Eliminar</Button>
                      </Col>
                      




                    </Row>
                  </CategoryCard>
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

export default Categorias;