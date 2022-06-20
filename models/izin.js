import { Sequelize, DataTypes } from 'sequelize';
import database from "../database.js";

const user = database.define("izin", {
  user : {
    type : DataTypes.STRING,
    allowNull : false
  },
  tanggal : {
    type : DataTypes.STRING,
    allowNull : false
  },
  lama : {
    type : DataTypes.STRING,
    allowNull : false
  },
  alasan : {
    type : DataTypes.STRING,
    allowNull : false
  },
  ganti: {
    type : DataTypes.STRING,
    allowNull : false
  },
}, {freezeTableName: true})

export default user