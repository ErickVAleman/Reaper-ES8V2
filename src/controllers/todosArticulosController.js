import Sequelize from 'sequelize'
import db from '../db'
const articulosModel = async () => {
  const sq = new db('zr','','spasuper1_201708').createSpecificURL(); 
  const create = await sq;
  const Articulos = create.define('Articulos',{
    where: {
      Articulo: Sequelize.STRING,
      Nombre: Sequelize.STRING
    }
  })
  Articulos.findAll({
    where:{
      Articulo: '0101007'
    }
  })
}
async function todosArticulosController (req, res){
  articulosModel()
  let query = `SELECT Articulo, Nombre, UnidadCompra, UnidadVenta FROM Articulos`;
  let database = new db('bo',query);
  let resultado = await database.rawQuery();
  res.json(resultado)
}

export default todosArticulosController
export {
  articulosModel
}
