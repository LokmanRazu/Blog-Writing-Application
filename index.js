const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session  =require('express-session');
const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(session({
  secret:SE
}))


//Setup view Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

// Imnport Router
const userRoute = require('./routers/UserRoutes')


// Use Router
app.use('/',userRoute)


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
