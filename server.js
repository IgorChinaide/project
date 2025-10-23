import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.js";
import contatosRoutes from "./routes/contatos.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/usuarios", usuariosRoutes);
app.use("/contatos", contatosRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
