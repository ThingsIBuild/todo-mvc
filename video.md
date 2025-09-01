
# Implementing the production and development environment to todo express application


### introduction: 

Hello In this  I will walk you through How I implemented the separate production and development environments in  our todo list application 
This help us to keep separate  local setup from proudction setup
especailly things like database url , debug settings

### problem: 
so the problem is when I deploy the application on the server . I am issue
that db_url is undefined because I am using the local db url to connecting 
the database

### solution 
1. .env (for fallback)
2. .env.production for the production
3. .env.development for the development 


so I created a folder configs inside that folder I create three files 
1. development.js
```js

export default {
  env: "development",
  db_url: process.env.DB_URI_DEV,
  PORT: process.env.PORT || 3000,
  debug: true,
};


```
2. production.js

```js
export default {
  env: "production",
  db_url: process.env.DB_URI_PROD,
  PORT: process.env.PORT || 8000,
  debug: false,
};
```

3. central_file  

```ts
import dotenv from "dotenv";

const ENV = (process.env.NODE_ENV || "development").trim().toLowerCase();

// load the correct .env file first
dotenv.config({ path: `.env.${ENV}` });

// dynamically import the config AFTER dotenv is loaded
let config;

if (ENV === "production") {
  const prodConfig = await import("./production.js");
  config = prodConfig.default;
} else {
  const devConfig = await import("./development.js");
  config = devConfig.default;
}

export default config;
```