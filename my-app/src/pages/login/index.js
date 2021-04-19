import React from 'react'
import './styles.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../services/api';
import NavBar from '../../components/NavBar/index.js';
import { useHistory} from 'react-router-dom';


const  Login = () => {

    const history = useHistory();

    //procurar os dados do formulário digitado
    async function submit(event ) {
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;


        console.log( email, password);

        console.log("sending...");
        //\/localhost:3003/auth/register , jogando os dados do form na api.
        api.post('/auth/authenticate', {
            email, password
          })
            .then(function (response) {
              
                history.push('/home');
            })
            .catch(function (err) {
              
              window.alert("Usuário não encontrado!!");
            })
    }
   
    return(
        <Container>
            <NavBar/>
            <div className="formulario-centralizado">
                <h2>Login de Usuário</h2>
                <div className="formulario">
                    <Form>

                            <Form.Group controlId="login-email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" />
                                
                            </Form.Group>

                            <Form.Group controlId="login-password">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha" />
                            </Form.Group>

                            <Button variant="primary" type="submit" id="btnEnviar" onClick={submit}>
                                Entrar
                            </Button>
                        </Form>
                </div>    
               
                
            </div>
        </Container>
    
    
    );
}

export default Login;