import {ListGroup} from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaDeTareas = ({tareasProps, borrarTareaProps}) => {
  return (
    <ListGroup>
      {
       tareasProps.map((elemento) => <ItemTarea key={elemento._id} nombreTareaProps={elemento.nombreTarea} idTarea={elemento._id} borrarTareaProps={borrarTareaProps}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaDeTareas;
