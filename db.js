import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", // coloque sua senha do MySQL
  database: "api_usuarios",
  port: 3306          // ✅ porta deve ir aqui, não no host
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("✅ Conectado ao MySQL!");
});
