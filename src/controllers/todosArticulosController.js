import Sequelize from'sequelize';
import connectDatabase from '../db';
const Op = Sequelize.Op
const { createRawQuery, createConnectionToDatabase } = connectDatabase()

const Articulos = async (req, res) => {
  const sequelize = await createConnectionToDatabase({suc: 'bo', database: 'spabodega_201705'});
  const Articulos = sequelize.define('Articulos',{
    Articulo: {
      primaryKey: true,
      type: Sequelize.STRING,
    },
    Nombre: Sequelize.STRING,
    UnidadCompra: Sequelize.STRING,
    UnidadVenta: Sequelize.STRING
  },{
    timestamps: false,
  })
  const art = await Articulos.findAll()
  res.json(art)
}

// Esto es un Ejemplo de como usarlo
async function todosArticulosController (req, res){
  let query = `SELECT Articulo, Nombre, UnidadCompra, UnidadVenta FROM Articulos`;
  let resultado = await createRawQuery({suc: 'bo', query})
  res.json(resultado)
}

// Fin de ejemplo
export {
  Articulos,
  todosArticulosController
}
