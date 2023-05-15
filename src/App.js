import React, {Component} from "react";
import './global.css';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ["A vida é uma jornada, não um destino.",
    "Grandes realizações exigem grandes esforços.",
    "A persistência leva à conquista.",
    "Acredite em si mesmo e conquiste o impossível.",
    "A sorte favorece os corajosos.",
    "O sucesso começa com um sonho.",
    "Aprenda com os erros e cresça ainda mais forte.",
    "Seja a mudança que você deseja ver no mundo.",
    "A felicidade está nas pequenas coisas da vida.",
    "Aproveite cada momento como se fosse o último."];
  }

  quebraBiscoito(){
    let state = this.state;
    let numAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = '" ' + this.frases[numAleatorio] + '" ';
    this.setState(state);

  }


  render(){
    return(
      <div className="container"> 
      <img src={require("./assets/biscoito.png")} alt="Biscoito" className="img" />
        
        <Botao nome="Abrir Biscoito" actionBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>

      </div>

    )
  }
}

class Botao extends Component{
    render(){
      return(
        <div>
          <button className="Button" onClick={this.props.actionBtn}>{this.props.nome}</button>
        </div>
      )
    }

}



export default App;
