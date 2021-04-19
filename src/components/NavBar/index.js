import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';



const NavBar = () => {
return(
    
        <div className="nav-container">
            <ul>
                <li><Link  to="/cadastro">  Faça Cadastro </Link></li>
                <li><Link  to="/mostraDados">  Mostrar Dados </Link></li>
            </ul>
        </div>
      );
    }
    
export default NavBar;