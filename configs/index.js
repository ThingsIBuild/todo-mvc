import dotenv from "dotenv";

const ENV = (process.env.NODE_ENV || "development").trim().toLowerCase();

// load .env.<env> file before configs
dotenv.config({ path: `.env.${ENV}` });

// dynamically import configs AFTER dotenv is ready
let config;
if (ENV === "production") {
  const prodConfig = await import("./production.js");
  config = prodConfig.default;
} else {
  const devConfig = await import("./development.js");
  config = devConfig.default;
}

console.log(config)

export default config;
