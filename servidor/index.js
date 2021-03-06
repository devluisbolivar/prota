const express = require("express");
const conectarDB = require("./config/db");

const app = express();

conectarDB();

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyectos"));

app.listen(PORT, () => {
  console.log(`El servidor está funcionando desde el puerto ${PORT}`);
});
