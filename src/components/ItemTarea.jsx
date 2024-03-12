import { Button, ListGroup } from "react-bootstrap";
import { borrarTareaAPI } from "../helpers/queries";

const ItemTarea = ({ nombreTarea, idTarea, borrarTareaProps}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <div> {nombreTarea}</div>
        <div>
          <Button
            onClick={() => borrarTareaProps(idTarea)}
            className="btn btn-danger me-3"
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
