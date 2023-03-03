import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        }); // esse livros.find deveria estar em services e não em controller
    };

    static listarLivrosID = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - ID do livro não localizado` });
            } else {
                res.status(200).send(livros);
            }
        });
    };

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar o livro.` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        }); // O método $set é do mongoose
    };

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro deletado com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    }
};
// Não esquecer de pegar os métodos e mandar para um service!
// find, findById, findByIdAndUpdate e findByIdAndDelete são todos métodos mongoose.
export default LivroController;