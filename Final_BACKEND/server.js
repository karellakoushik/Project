const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes.js")

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://duni:a6CCDB0ohVtTMCqa@cluster0.r7tki.mongodb.net/?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));;


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.use(Router);

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});