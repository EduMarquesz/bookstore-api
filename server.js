import app from './src/app.js'
const Port = process.env.PORT || 3333;

app.listen(Port, () => {
    console.log(`Servidor rodando em http://localhost:${Port}`);
});