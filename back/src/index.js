const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


const app = express();

app.use(cors()); //permitir que envie dados.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

require('../controllers/authController')(app);

app.listen(3004);