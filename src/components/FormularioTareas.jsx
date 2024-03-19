import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaDeTareas from "./ListaDeTareas";
import { useState, useEffect } from "react";
import {
  borrarTareaAPI,
  crearTareaAPI,
  leerTareasAPI,
} from "../helpers/queries";

const FormularioTareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerTareasAPI();
      setTareas(respuesta);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const objetoNombreTarea = { nombreTarea };
      const objetoTareaNueva = await crearTareaAPI(objetoNombreTarea);
      const dato = await objetoTareaNueva.json();
      setTareas([...tareas, dato]);
      setNombreTarea("");
    } catch (error) {
      alert(error);
    }
  };

  const borrarTarea = (id) => {
    borrarTareaAPI(id);
    const tareasFiltradas = tareas.filter((elemento) => elemento._id !== id);
    setTareas(tareasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Escriba la tarea que desea agregar"
            minLength={3}
            maxLength={80}
            required
            onChange={(e) => setNombreTarea(e.target.value)}
            value={nombreTarea}
          />
          <Button variant="success" className="ms-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaDeTareas
        tareasProps={tareas}
        borrarTareaProps={borrarTarea}
      ></ListaDeTareas>
    </section>
  );
};

export default FormularioTareas;
