const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Adiciona uma rota para a raiz do servidor (GET /)
app.get("/", (req, res) => {
  res.send("Bem-vindo ao servidor!");
});

// Array com URLs das imagens
const imageUrls = [
  "https://images.pexels.com/photos/19335258/pexels-photo-19335258/free-photo-of-um-telefone-celular-nokia-3310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12123389/pexels-photo-12123389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

// Rota GET para fornecer as imagens
app.get("/images", (req, res) => {
  console.log("GET /images requisitado");
  res.json({ imageUrls });
});

// Rota POST para registrar o log
app.post("/log", async (req, res) => {
  console.log("Imagem clicada! Log enviado.");
  res.json({ message: "Log registrado com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
