require("dotenv").config();

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    charset: "utf8"
  },
};
