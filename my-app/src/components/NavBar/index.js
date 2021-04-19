import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
return(
        <Navbar bg="light" expand="lg">
            <div>
            <ul>
                <li><Link  to="/cadastro">  Faça Cadastro </Link></li>
                <li><Link  to="/mostraDados">  Mostrar Dados </Link></li>
                <li><Link  to="/login">  Faça Login </Link></li>
            </ul>
            </div>
        </Navbar>
      );
    }
    
export default NavBar;