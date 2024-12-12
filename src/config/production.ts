const productionConfig = {
  port: Number(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
  mongoUri: process.env.MONGO_URI || "your_mongo_uri",
};
