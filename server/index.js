// Para backend foi utilizado yarn, express, nodemon, mysql

const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors");


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
})

app.use(express.json())
app.use(cors())

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuário WHERE email = ?", [email],
    (err, res) => {
      if (err) {
        res.send(err);
      }
      res.send(result)
    }
  )
})

app.listen(3003, () => {
  console.log("Rodando na porta 3003")
})

//TESTE


// app.get('/', (req, res) => {
//   const sql = "INSERT INTO usuário (email, password) VALUES (?, ?)";
//   const values = ['andersonrfpe@gmail.com', '1234567'];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       return res.status(500).send("Erro ao inserir dados no banco de dados");
//     }
//     res.send("Usuário inserido com sucesso!");
//   });
// })