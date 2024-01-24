import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaDeTareas from "./ListaDeTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage = JSON.parse(localStorage.getItem("keyTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(() => {
    console.log("ejecutando useEffect");
    localStorage.setItem("keyTareas", JSON.stringify(tareas));
  }, [tareas]);

  function handleSubmit(e) {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  }

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter(
      (elemento) => elemento !== nombreTarea
    );
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
            placeholder="Tarea a agregar"
            minLength={3}
            maxLength={80}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="info" className="ms-2" type="submit">
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
