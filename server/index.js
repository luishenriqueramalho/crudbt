require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Models
const Arenas = require("./src/model/arenasModel");

const app = express();
const PORT = process.env.PORT || 3333;

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.zlqf7rf.mongodb.net/retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Banco conectado com sucesso!"))
  .catch((error) =>
    console.log("Ocorreu um erro na conexão com o banco", error)
  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./src/routes/router");
routes(app);
app.listen(PORT);
