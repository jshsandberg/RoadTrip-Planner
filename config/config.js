require("dotenv").config();

module.exports = {
  "development": {
    "username": "tcguw1esy3ib5cj5",
    "password": "iy5a1y8zid67fh7g",
    "database": "s4drz9bihc3ykmcp",
    "host": "sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
    "username": "tcguw1esy3ib5cj5",
    "password": "iy5a1y8zid67fh7g",
    "database": "s4drz9bihc3ykmcp",
    "host": "sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "port": 3306,
    "dialect": "mysql",
    "define": {
      "timestamps": false
    }
  }
}