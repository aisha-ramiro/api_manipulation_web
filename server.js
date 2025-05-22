const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/saudacao', (req, res) => {
    const data = {
        mensagem: "Bem-vindo a API disponibilizada pelo 3º Semestre ADS Noite"
    }
    res.json(data);
});

app.listen(port, () => {
    console.log("Acesse http://localhost:3000/saudacao");
})