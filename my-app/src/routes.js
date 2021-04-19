import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import MostraDados from './pages/mostraDados';
import Login from './pages/login';
import Home from './pages/home';




export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />    
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/mostraDados" component={MostraDados}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}