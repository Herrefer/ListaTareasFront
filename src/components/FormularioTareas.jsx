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
      console.log(respuesta);
    } catch (error) {
      console.log("ocurrió un error en la solicitud");
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const objetoNombreTarea = { nombreTarea };
      console.log(objetoNombreTarea);
      const objetoTareaNueva = await crearTareaAPI(objetoNombreTarea);
      console.log(objetoTareaNueva);
      const dato = await objetoTareaNueva.json();
      setTareas([...tareas, dato]);
      console.log(dato);
      setNombreTarea("");
    } catch (error) {
      console.log(error);
    }
  };

  const borrarTarea = (id) => {
    borrarTareaAPI(id);
    const tareasFiltradas = tareas.filter((elemento) => elemento._id !== id);
    console.log(tareasFiltradas);
    setTareas(tareasFiltradas);
    console.log(tareas);
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
