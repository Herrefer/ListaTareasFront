import {ListGroup} from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaDeTareas = ({tareasProps, borrarTareaProps}) => {
  return (
    <ListGroup>
      {
        tareasProps.map((elemento, posicionTarea)=> <ItemTarea key={posicionTarea} nombreTarea={elemento} borrarTareaProps={borrarTareaProps}></ItemTarea> )
      }
    </ListGroup>
  );
};

export default ListaDeTareas;
