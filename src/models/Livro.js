import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        // O parâmetro "required: true" está definindo o campo como obrigatório para a inserção no banco.
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: String, required: true },
        editora: { type: String, required: true },
        numeroPagina: { type: Number }
    }
);

const livros = mongoose.model('livros', livroSchema);
export default livros;