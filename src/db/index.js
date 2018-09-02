
import Sequelize from "sequelize";
import config from '../config.db.json'
class connectDatabase {
  /**
   * @param {string} db Especifique la abreviacion de la base de datos que especifico en config.db.json
   * @param {string} query  Especifique la query que desea ejecutar
   */
  constructor(db = ``, query = ``) {
    this.db = db;
    this.query = query;
  }

  async createURL(){
    let db = this.db.toLowerCase();
    let sq = new Sequelize(`${config.dialect}://${config.user}:${config.pwd}@${config.url[db]}${config.prefix}:${config.port}/${config.databases[db]}`);
    try {
      await sq.authenticate()
      return sq
    }catch(e){
      throw new Error(`No existe coneccion con la base de datos \n ${e}`);
    }
  }

  async selectToDb () {
    try {
      let conn = await this.createURL();
      let res = await conn.query(this.query, { type: conn.QueryTypes.SELECT})
      return res
    } catch (e) {
      throw new Error(e)
    }
  }

}

export default connectDatabase
