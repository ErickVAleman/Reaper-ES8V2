import db from '../db'
async function todosArticulosController (req, res){
  let query = `SELECT Articulo, Nombre, UnidadCompra, UnidadVenta FROM Articulos`;
  let database = new db('bo',query);
  let resultado = await database.selectToDb();
  res.json(resultado)
}
export default todosArticulosController
