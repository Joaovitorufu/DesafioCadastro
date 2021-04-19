import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import MostraDados from './pages/mostraDados';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/mostraDados" component={MostraDados}/>
            </Switch>
        </BrowserRouter>
    );
}