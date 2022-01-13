import React from "react";
import "/src/App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardMedio from "./components/CardGrande/CardMedio/CardMedio";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://photos.google.com/photo/AF1QipNiRWH2R-7aV_8EvX7hwHp84tJZW89YuLuLFNcQ"
          nome="Vanessa"
          descricao="Oi, eu sou a Van ou nessa, sou aluna Labenu."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardMedio
          imagem="https://cdn-icons.flaticon.com/png/128/3178/premium/3178158.png?token=exp=1642048793~hmac=acc1e4fdd487ae8799a455cad3e6d88d"
          nome="Email: meuemail@eu.com"
        />

        <CardMedio
          imagem="https://cdn-icons.flaticon.com/png/128/3178/premium/3178158.png?token=exp=1642048793~hmac=acc1e4fdd487ae8799a455cad3e6d88https://www.flaticon.com/br/icone-gratis/endereco-residencial_123952https://cdn-icons-png.flaticon.com/128/1239/1239525.png"
          nome="Endereço: Rua Azul"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4D0BAQFPOs7PRhr16Q%2Fcompany-logo_200_200%2F0%2F1625158562155%3Fe%3D2159024400%26v%3Dbeta%26t%3DB8DQPHjwvIado0hkVcJkSwx4opagESaRz7cvgA4FXQ8&imgrefurl=https%3A%2F%2Fbr.linkedin.com%2Fcompany%2Fmazarsnobrasil&tbnid=JIRTVV-Te8lSiM&vet=12ahUKEwjmzsGn9K31AhWDMbkGHUPMCSMQMygAegUIARCDAQ..i&docid=mYYRT7bUEuUt-M&w=200&h=200&itg=1&q=mazars%20brasil&ved=2ahUKEwjmzsGn9K31AhWDMbkGHUPMCSMQMygAegUIARCDAQ"
          nome="Mazars"
          descricao="Analista Sênior"
        />

        <CardGrande
          imagem="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F59%2F67%2Ffuturistic-cybernetic-scheme-with-multidirectional-vector-11535967.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Ffuturistic-cybernetic-scheme-with-multidirectional-vector-11535967&tbnid=v7n1gl6BHZEIKM&vet=12ahUKEwiO2fLO9K31AhUjMrkGHUJSCp4QMygZegUIARCbAg..i&docid=BxdddtKWi2oCnM&w=1000&h=1080&q=cybernetic&ved=2ahUKEwiO2fLO9K31AhUjMrkGHUJSCp4QMygZegUIARCbAg"
          nome="on-Accountant"
          descricao="Fundadora e C.O."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
