require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": 3306,
    "dialect": "mysql",
    "define": {
      "timestamps": false
    }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": 3306,
    "dialect": "mysql",
    "define": {
      "timestamps": false
    }
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}