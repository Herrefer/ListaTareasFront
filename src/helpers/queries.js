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
    console.log('hubo un error en la solicitud');
  }
};
