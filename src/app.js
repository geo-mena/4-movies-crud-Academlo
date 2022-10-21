const express = require("express");

const db = require('./utils/database')

const initModels = require('./models/initModels')

const app = express();

const port = 8000;

db.authenticate()
    //? Accion  Informativa  de si las credenciales son correctas
    .then(() => console.log('DB Aunthentication Succesfully'))
    .catch((err) => console.log(err))

db.sync()
    //? Sincroniza los modelos con la base de datos, crenado las tablas  
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))

initModels()

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK!" });
});

app.listen(port, () => {
  console.log(`server started at prot ${port}`);
});
