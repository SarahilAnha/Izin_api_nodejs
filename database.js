import { Sequelize } from 'sequelize';

const database = new Sequelize('izin', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


export default database 