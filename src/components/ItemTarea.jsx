import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTareaProps }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <div> {nombreTarea}</div>
        <div>
          <Button
            className="btn btn-danger me-3"
            onClick={() => borrarTareaProps(nombreTarea)}
          >
            Borrar
          </Button>
          <Button className="btn btn-info">Editar</Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
