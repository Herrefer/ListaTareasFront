const urlTareas = import.meta.env.VITE_API_TAREAS;

console.log(urlTareas);

export const leerTareasAPI = async () => {
  try {
    const respuesta = await fetch(urlTareas);
    const listaTareas = await respuesta.json();
    console.log(respuesta);
    console.log(listaTareas);
    return listaTareas;
  } catch (error) {
    console.log("hubo un error en la solicitud");
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
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarTareaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${urlTareas}/${id}`,{
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
