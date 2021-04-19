const express = require('express');
const User = require ('../models/user');
const bcrypt = require('bcryptjs');


const router = express.Router();



//cadastrar usuário método POST
router.post('/register', async (req, res) => {
    //console.log("register");

    const {email} = req.body;

    try{
        
        if(await User.findOne({email})){
            return res.status(400).send({error: 'Usuário já existe'});
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({user});

    } catch (err) {
        return res.status(400).send({error: 'registro falhou' });
    }
    

});
//Listar todos os usuários
router.get("/user", async (req, res) => {
 try {
    const users = await User.find();
    return res.status(200).json(users);

 }catch(err){
    return res.status(400).send({error: 'listagem falhou' });
 }
});
/*Procurar um Usuário especifico
router.get("/user/:email", async (req, res) => {
    try {
        const email = req.params
        console.log(email);

       const users = await User.findOne(email);
       return res.status(200).json(users);
   
    }catch(err){
       return res.status(400).send({error: 'Usuário Não encontrado' });
    }
});*/
//deletar um Usuário especifico
router.delete("/delete/:email", async (req, res) => {
    try{
        const email = req.params

        const user = await User.findOneAndDelete(email);
        return res.status(200).send("deletado com sucesso");
    }catch(err){
        return res.status(400).send({error: 'delete falhou'});
    }
});

router.post('/authenticate', async (req, res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if(!user){
        return res.status(400).send({error:'usuário não existe!'});
    }

    if(!await bcrypt.compare(password , user.password)){
        return res.status(400).send({error:'senha não bate!'});
    }

    user.password = undefined;


    res.send({user});
})

module.exports = app => app.use('/auth', router);