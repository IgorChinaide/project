import express from "express";
import { db } from "../db.js";

const router = express.Router();

// Listar usuários
router.get("/", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Criar usuário
router.post("/", (req, res) => {
  const { nome, email, senha } = req.body;
  db.query(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, nome, email });
    }
  );
});

export default router;
