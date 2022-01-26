import axios from "axios";
import React from 'react'
import "./styles.css";

export default class App extends React.Component {
  AllUsers={
    none: []
  }

  componentDidMount()
  {
    getAllUsers()
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          Headers: {
            Authorization: "vanessa-dias-vaughan"
          }
        }
      )
  
      .then((response)=> {
        // this.setState({AllUsers:response.data.result.list})
        alert("Usuário criado com sucesso!".response.data")
      })
  
      .catch((error) => {
        alert("Não foi possível criar usuário", 
        error.response.data);
      });
  };

creatUsers=()=>{

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const body = {
  "name": " ",
  "email": " "
}
  

const axioConfig = {

  Headers:

  {
  Authorization:"vanessa-dias-vaughan"
  }

axios.post(url,body,axioConfig)

.then((resp)=>{
  console.log(resp.response.date)
  alert("Usuário adicionado com sucesso!")  
})

.catch((err)=>{
  console.log(err.response,data)
  alert("Por favor, preencha todos os campos para adicionar usuário")
})
}
// creatUsers()

  render(){
    const novoUsuario= this.state.creatUsers.map(
      (creatUsers)=>{
        return(
          <div>
            <p>{creatUsers.name}</p>
          </div>
        )
      }
    )
    console.log("estado", this.state)
    return (
      <div className="App">
        <button onClick={this.getAllUsers()}>Chamar</button>
        </div>
    );
  }
}






