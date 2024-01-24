import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea,borrarTareaProps}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {nombreTarea}<Button className="btn btn-danger" onClick={() => borrarTareaProps(nombreTarea)}>Borrar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
