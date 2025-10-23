import express from "express";
import { db } from "../db.js";

const router = express.Router();

// Listar contatos
router.get("/", (req, res) => {
  db.query("SELECT * FROM contatos", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Criar contato
router.post("/", (req, res) => {
  const { usuario_id, nome, telefone, email } = req.body;
  db.query(
    "INSERT INTO contatos (usuario_id, nome, telefone, email) VALUES (?, ?, ?, ?)",
    [usuario_id, nome, telefone, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, usuario_id, nome, telefone, email });
    }
  );
});

export default router;
