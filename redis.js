import { createClient } from "redis";
import dbConfig from "./app/config/db-config.js";
const env = process.env.ENVIRONMENT;

const { redis_password, redis_host, redis_port } = dbConfig[env];
const redis = createClient({
  password: redis_password,
  socket: {
    host: redis_host,
    port: Number(redis_port),
  },
});
export default redis;
