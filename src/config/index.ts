import defaultConfig from "./default";
import developmentConfig from "./development";

const env = process.env.NODE_ENV || "development";

let config = defaultConfig;
if (env === "development") {
  config = { ...config, ...developmentConfig };
} else if (env === "production") {
  config = { ...config, ...productionConfig };
}

export default config;
