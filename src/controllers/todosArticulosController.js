import db from '../db'

// Esto es un Ejemplo de como usarlo
async function todosArticulosController (req, res){
  let query = `SELECT Articulo, Nombre, UnidadCompra, UnidadVenta FROM Articulos`;
  let database = new db('bo',query);
  let resultado = await database.rawQuery();
  res.json(resultado)
}
// Fin de ejemplo
export default todosArticulosController
