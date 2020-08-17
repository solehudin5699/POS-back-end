require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const indexRouter = require("./src/Routers/index");

//Listening Port
app.listen(process.env.PORT, () => {
  console.log(`Congrate! Server is running at port ${process.env.PORT}`);
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());

app.use(indexRouter);
