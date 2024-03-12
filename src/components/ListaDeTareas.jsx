import {ListGroup} from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaDeTareas = ({tareasProps, borrarTareaProps}) => {
  return (
    <ListGroup>
      {
       tareasProps.map((elemento) => <ItemTarea key={elemento.id} nombreTarea={elemento.nombreTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaDeTareas;
