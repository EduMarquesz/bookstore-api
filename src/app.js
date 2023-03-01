import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

const app = express();
app.use(express.json());

// const livros = [
//     { id: 1, "titulo": "The Witcher" },
//     { id: 2, "titulo": "Percy Jackson" }
// ];

app.get("/", (req, res) => {
    res.status(200).send('Curso de Node');
});

app.get("/livros", (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros);
    });

});

app.get("/livros/:id", (req, res) => {
    let index = BuscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso!');
});

app.put("/livros/:id", (req, res) => {
    let index = BuscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    let { id } = req.params;
    let index = BuscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso!`);
});

function BuscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
};

export default app