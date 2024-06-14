import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT;

const {
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
  DB_DATABASE,
  DB_PORT,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
} = process.env;
if (
  !DB_HOST ||
  !DB_PASSWORD ||
  !DB_USER ||
  !DB_PASSWORD ||
  !DB_DATABASE ||
  !DB_PORT ||
  !REDIS_HOST ||
  !REDIS_PORT ||
  !REDIS_PASSWORD
) {
  throw new Error("Environment variable Error");
}

const dbConfig = {
  development: {
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "mysql",
    redis_password: REDIS_PASSWORD,
    redis_host: REDIS_HOST,
    redis_port: REDIS_PORT,
  },
  production: {
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "mysql",
    redis_password: REDIS_PASSWORD,
    redis_host: REDIS_HOST,
    redis_port: REDIS_PORT,
  },
};
export default dbConfig;
