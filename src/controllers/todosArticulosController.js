import db from '../db'
async function todosArticulosController (req, res){
  let query = `SELECT TOP 3 * FROM Articulos`;
  let database = new db('bo',query);
  let resultado = await database.selectToDb();
  console.log(resultado)
  res.json(resultado)
}
export default todosArticulosController
