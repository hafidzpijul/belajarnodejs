require("dotenv").config();
const mysql = require("mysql2");
const koneksi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gantengdotcom",
  database: "db_baru"
});
koneksi.connect(error => {
  if (error) throw error;
});
module.exports = koneksi;
