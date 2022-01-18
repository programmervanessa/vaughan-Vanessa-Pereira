// import AdicionarTexto from "./components/AdicionarTexto";
import React from "react";
// import styled from "styled-components";

// const ContainerMensagem = styled.div
// with: 100%;
// heigth: 100%:
// display. flex;
// flex-direction. column;
// justify-content. flex-start;
// align-items. flex-start;
// background-color. #fff;
// border-redius. 10px;
// box-shadow. 0px 0px 10px #000,
// padding. 10px;
// margin-bottom. 10px;
// &:hover {
//   cursor: Pointer;
// }
// ;

class App extends React.Component {
  state = {
    inputUsuario: "",
    inputMensagem: ""
  };

  onchangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value });
  };

  onchangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  // adicionarTexto = (Event) => {
  //   const novoTexto = {
  //     nome: this.state.inputUsuario,
  //     mensagem: this.state.inputMensagem
  //   }
  // }

  limparInputs = () => {
    this.setState({
      inputUsuario: "",
      inputMensagem: ""
    });
  };

  render() {
    // const novaMensagem = this.state.inputUsuario.map((mgs) => {

    // return (
    //   <CardNovaMensagem key={mgs.id}>
    //     <p>{msg.inputMensagem}</p>
    //     <button
    //       onClick={() => {
    //       this.rapagarMensagem(msg.id)
    //     }}
    //     >
    //       x
    //     </button>
    //     </CardNovaMensagem>
    //       );
    //       });

    //   {/* // <ContainerMensagem> */}
    return (
      <div>
        <input
          value={this.state.inputUsuario}
          onChange={this.onchangeInputUsuario}
          placeholder={"Usuário"}
        />

        <input
          value={this.state.inputMensagem}
          onChange={this.onchangeInputMensagem}
          placeholder={"Mensagem"}
        />

        <button onClick={this.limparInputs}>Enviar</button>
        <p>{this.state.inputUsuario}</p>
        <p>{this.state.inputMensagem}</p>
        {/* {CardNovaMensagem} */}
      </div>
    );
  }
}

export default App;
