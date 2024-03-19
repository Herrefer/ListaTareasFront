import { Button, ListGroup, Modal, Form} from "react-bootstrap";
import { useState } from "react";
import { editarTareaAPI, leerTareasAPI} from "../helpers/queries";


const ItemTarea = ({ nombreTareaProps, idTarea, borrarTareaProps}) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombreTarea, setNombreTarea] = useState("");

  const handleSubmit = async (e) => {
    const objetoTareaEditada = {nombreTarea};
    await editarTareaAPI(objetoTareaEditada,idTarea);
    leerTareasAPI();
  }

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <div> {nombreTareaProps}</div>
        <div>
          <Button
            onClick={() => borrarTareaProps(idTarea)}
            className="btn btn-danger me-3"
          >
            Borrar
          </Button>
          <Button className="btn btn-info" onClick={handleShow}>Editar</Button>
        </div>
      </ListGroup.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese la nueva tarea"
            minLength={3}
            maxLength={80}
            required
            onChange={(e) => setNombreTarea(e.target.value)}
            value={nombreTarea}
          />
          <Button variant="success" className="ms-2" type="submit">
            Aceptar cambios
          </Button>
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemTarea;
