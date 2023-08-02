//jshint esversion:6

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connection from "./Database/db.js";
const app = express();
app.use(cors());
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
import dotenv from "dotenv";
dotenv.config();
// app.use(express.static("public"));
// const date = require(__dirname + "/date.js");

connection();
app.get("/", (req, res) => {
  console.log("hellow world");
});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
