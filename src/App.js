import {
  Routes,
  Route,
} from "react-router-dom";
import Productos from "./Pages/Productos";
import Container from 'react-bootstrap/Container';
import NavBar from "./Components/NavBar";
import Categorias from "./Pages/Categorias";



function App() {
  return (
    <Container >

      <NavBar />

      <Routes>
        <Route index path="/" >
        </Route>
        <Route path='/productos' element={<Productos/>}>
        </Route>
        <Route path="/categorias" element={<Categorias/>}>
        </Route>
      </Routes>
    </Container>



  );
}

export default App;
