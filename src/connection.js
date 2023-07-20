// const mySql = require("mysql2");
// const dotenv = require("dotenv");
// dotenv.config();

// const db = mySql.createConnection({
//   host: process.env.HOST,
//   database: process.env.DB_NAME,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
// });

// db.connect((err) => {
//   if (err) {
//     console.log("Connection failed");
//   } else {
//     console.log("Connection Successful");
//   }
// });

// module.exports = db;

const mySql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mySql.createConnection({
  host : process.env.HOST,
  user : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DB_NAME

//   host: "localhost",
//   user: "root",
//   password: "Admin@123",
//   database: "contactapi"
});

db.connect((err) => {
  if (err) {
    console.log("error in connection ");
  } else {
    console.log("Connected Successfully!!");
  }
});

module.exports = db;