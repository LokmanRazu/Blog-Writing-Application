const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const db = process.env.DATABASE.replace("<password>", process.env.DBPASSWORD);
mongoose.connect(db).then((con) => {
  console.log("Database Connection Successfull");
});

app.listen(process.env.PORT, () => {
  console.log(`App is runing in ${process.env.PORT}`);
});
