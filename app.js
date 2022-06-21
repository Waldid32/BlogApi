import express from "express";
import cors from "cors";
import db from "./database/db.js";

import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexión exitosa en la BD");
} catch (error) {
  console.log(`El erro de conexión: ${error} `);
}

// app.get("/", (req, res) => {
//   res.send("Hola Mundo");
// });

app.listen(8000, () =>
  console.log("Server UP running in http://localhost:8000/")
);
