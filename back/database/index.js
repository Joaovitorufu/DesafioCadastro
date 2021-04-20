const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//conexão com o mongoDB
mongoose.connect("mongodb://localhost/desafioCadastro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose;