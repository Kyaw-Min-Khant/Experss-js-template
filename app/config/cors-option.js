const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigin?.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  exposedHeaders: ["X-Total-Count"],
};

export default corsOptions;
