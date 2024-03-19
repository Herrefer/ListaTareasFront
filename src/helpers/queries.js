const urlTareas = import.meta.env.VITE_API_TAREAS;


export const leerTareasAPI = async () => {
  try {
    const respuesta = await fetch(urlTareas);
    const listaTareas = await respuesta.json();
    return listaTareas;
  } catch (error) {
    alert(error);
  }
};

export const crearTareaAPI = async (tareaNueva) => {
  try {
    const respuesta = await fetch(urlTareas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaNueva),
    });
    return respuesta;
  } catch (error) {
    alert(error);
  }
};

export const borrarTareaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${urlTareas}/${id}`,{
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    alert(error);
  }
};

export const editarTareaAPI = async (tareaEditada,id) =>{
  try{
    const respuesta = await fetch(`${urlTareas}/${id}`,{
      method: "PUT",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(tareaEditada),
    });
    return respuesta;
  }catch (error){
    console.log(error);
  }
}
