import connectDatabase from '../db'
const { createRawQuery } = connectDatabase()

// Esto es un Ejemplo de como usarlo
async function todosArticulosController (req, res){
  let query = `SELECT Articulo, Nombre, UnidadCompra, UnidadVenta FROM Articulos`;
  let resultado = await createRawQuery({suc: 'bo', query})
  res.json(resultado)
}
// Fin de ejemplo
export default todosArticulosController
