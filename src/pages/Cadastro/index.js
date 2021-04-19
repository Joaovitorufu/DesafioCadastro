import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../services/api';
import NavBar from '../../components/NavBar/index.js';


const  Cadastro = () => {

    //procurar os dados do formulário digitado
    async function submit(event ) {
        event.preventDefault();

        const name = document.getElementById("register-name").value;
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;
        const password2 = document.getElementById('register-password2').value;

        //verificar se as senhas conferem
    if (password.toString() !== password2.toString())
    return(
        window.alert("senha não confere")
    );

        console.log(name, email, password);

        console.log("sending...");
        //\/localhost:3003/auth/register , jogando os dados do form na api.
        api.post('/auth/register', {
            name, email, password
          })
            .then(function (response) {
              
              window.alert("enviado!");
            })
            .catch(function (err) {
              
              window.alert("nao enviado!");
            })
    }
   
    return(
        <Container fluid>
            <NavBar/>
            <div className="formulario-centralizado">
                <h2>Cadastro de Usuário</h2>
                <div className="formulario">
                    <Form>

                        <Form.Group controlId="register-name">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" />
                    
                            </Form.Group>

                            <Form.Group controlId="register-email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" />
                                
                            </Form.Group>

                            <Form.Group controlId="register-password">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha" />
                            </Form.Group>

                            <Form.Group controlId="register-password2">
                                <Form.Label>Confirma Senha</Form.Label>
                                <Form.Control type="password" placeholder="Confirme sua senha" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" id="btnEnviar" onClick={submit}>
                                Cadastrar
                            </Button>
                        </Form>
                </div>    
               
                
            </div>
        </Container>
    
    
    );
}

export default Cadastro;
