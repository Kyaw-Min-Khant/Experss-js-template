import express from "express";
import morgan from "morgan";
import cors from "cors";
import corsOptions from "./app/config/cors-option.js";
const server = async () => {
  const app = express();
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors(corsOptions));
  app.use("/", (req, res) => res.send("Hello World!"));
  return app;
};

export default server;
