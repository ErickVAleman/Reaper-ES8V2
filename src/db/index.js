import Sequelize from "sequelize";
import { user,pwd, port, dialect, prefix, databases, url, tiendas} from '../config.db.json'
/**
 * @param {string} db Especifique la abreviacion de la base de datos que especifico en config.db.json
 * @param {string} query  Especifique la query que desea ejecutar
 * @param {string} database Especifique la base de datos
 */

function connectDatabase() {
  async function createConnection({suc}) {
    const T = suc.toLowerCase();
    let sq = new Sequelize(`${dialect}://${user}:${pwd}@${url[T]}${prefix}:${port}/${databases[T]}`);
    try {
      await sq.authenticate()
      return sq
    } catch (e) {
      throw new Error(`No existe coneccion con la base de datos \n ${e}`);
    }
  }
  async function createConnectionToDatabase({suc, database}) {
    try {
      let T = suc.toLowerCase();
      let db = database.toLowerCase();
      let sq = new Sequelize(`${dialect}://${user}:${pwd}@${url[T]}${prefix}:${port}/${db}`);
      await sq.authenticate()
      return sq
    } catch (e) {
      throw new Error(e)
    }
  }
  async function createRawQuery({suc,query}) {
    try {
      let conn = await createConnection({suc});
      let res = await conn.query(query, {
        type: conn.QueryTypes.SELECT
      });
      return res
    } catch (e) {
      throw new Error(e)
    }
  }
  function declareTiendaAlmacen ({suc}){
    let tienda = suc.toLowerCase();
    let resp = `DECLARE @Sucursal NVARCHAR(2) = '${tienda}', @Almacen INT = ${tiendas[tienda].almacen}, @Tienda INT = ${tiendas[tienda].tienda}`;
    return resp
  }
  
  return {
    createRawQuery,
    createConnectionToDatabase,
    declareTiendaAlmacen
  }
}
export default connectDatabase
