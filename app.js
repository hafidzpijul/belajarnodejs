require("dotenv").config();
const express = require("express");
const loger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routeNav = require("./src/routes/index");

const app = express();

const PORT = 3000;
app
  .use(cors())
  .use(loger("dev"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use("/", routeNav)
  .listen(PORT, () => {
    console.log(`running in port:${PORT}`);
  })