import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import NavBar from '../../components/NavBar'
import './styles.css'



const Home = () =>{

    
    return(
            <Container>
            <NavBar/>
            <div className="centralizado">
            <h1>Bem Vindo!!</h1>
            <div className="central"><Button id="btnSair" href="./login">Sair</Button></div>
            </div>
            </Container>
    );

}

export default Home;