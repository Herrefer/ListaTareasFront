import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormularioTareas from "./components/FormularioTareas";
import './helpers/queries'

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center">Lista de Tareas</h1>
        <FormularioTareas></FormularioTareas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
