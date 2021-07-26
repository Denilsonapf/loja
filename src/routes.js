import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Cadastrar from './pages/cadastrar';
import Tabela from './pages/tabela';
import TabelaCliente from './pages/tabelaCliente';



export default function Routes(){
    return(

        
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Cadastrar}/>
                <Route path="/tabela" component={Tabela}/>
                <Route path="/tabelacliente" component={TabelaCliente}/>
            </Switch>
        </BrowserRouter>

        
    )
}