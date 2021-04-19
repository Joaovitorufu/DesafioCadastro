import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import NavBar from '../../components/NavBar/index.js';
import api from '../../services/api';


const MostraDados = () =>{
    

    async function getContent(){
      
      try{
        const response = await fetch('http://localhost:3004/auth/user')
        
        const data = await response.json()
        show(data);

      }catch(error){
        window.alert("algum erro ocorreu!!");
      }
    }
    getContent();
  
      function show(users){

        let output = ''
        var cont=0;


        for(let user of users){
          cont++;
          output += ` <tr><td>${cont}</td>
                      <td>${user.name}</td>
                      <td>${user.email}</td></tr> `
        }

        document.querySelector('tbody').innerHTML = output
      }

    return(
        <Container>
          <NavBar/>
            <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </Table>
</div>
        </Container>
    );
}
export default MostraDados;