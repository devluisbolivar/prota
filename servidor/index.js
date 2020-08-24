const express = require("express");
const conectarDB = require("./config/db");

const app = express();

conectarDB();

const PORT = process.env.port || 4000;

app.use("/api/usuarios", require("./routes/usuarios"));

app.listen(PORT, () => {
  console.log(`El servidor está funcionando desde el puerto ${PORT}`);
});
