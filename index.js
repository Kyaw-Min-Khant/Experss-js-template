import { PORT } from "./app/config/db-config.js";
import redis from "./redis.js";
import sequelize from "./sequelize.js";
import server from "./server.js";

sequelize
  .authenticate()
  .then(() => {
    console.log("🎉 DB connected!");
    redis
      .connect()
      .then(() => {
        console.log("🎉 Redis connected!");
        server().then((app) =>
          app.listen(PORT, () => {
            console.log(`🚀 Server ready at port: ${PORT}`);
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log("🚨 Failed to connect db: " + err.message);
  });
