import React from "react";
import "./CardMedio.css";

function CardMedio(props) {
  return (
    <div className="card-container">
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}

export default CardMedio;
