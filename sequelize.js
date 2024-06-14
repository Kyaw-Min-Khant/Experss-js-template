import { Sequelize } from "sequelize";
import dbConfig from "./app/config/db-config.js";
const env = process.env.ENVIRONMENT;
const { username, password, database, host, dialect, port } = dbConfig[env];
const sequelize = new Sequelize(database, username, password, {
  port,
  host,
  dialect,
  logging: false,
});

export default sequelize;
