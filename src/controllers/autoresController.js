import autores from "../models/Autor.js";

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        }); // esse autores.find deveria estar em services e não em controller
    };

    static listarAutoresID = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - ID do autor não localizado` });
            } else {
                res.status(200).send(autores);
            }
        });
    };

    static cadastrarAutores = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar o autor.` });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static atualizarAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor atualizado com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        }); // O método $set é do mongoose
    };

    static excluirAutores = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor deletado com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    }
};
// Não esquecer de pegar os métodos e mandar para um service!
// find, findById, findByIdAndUpdate e findByIdAndDelete são todos métodos mongoose.
export default AutorController;