import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/app.scss'
import 'react-bootstrap'
import Lifecard from './Lifecard';
import Footer from './Footer';
import MtgColorPicker from './mtg-color';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      life: 20,
      damage: 0,
      white: true,
      blue: true,
      green: true,
      red: true,
      black: true
    }
  }

//on click to update life total 
  addOneClick = async () => {
    this.setState({
      life: this.state.life + 1
    })
  }

  minusOneClick = async () => {
    this.setState({
      life: this.state.life -1
    })

    this.setState({
      damage: this.state.damage + 1
    })
  }

  addFiveClicked = async () => {
    this.setState({
      life: this.state.life + 5
    })
  }

  minusFiveClicked = async () => {
    this.setState({
      life: this.state.life - 5
    })

    this.setState({
      damage: this.state.damage + 5
    })
  }

// reset life total and damage methods
  reset20 = async () => {
    this.setState({life: 20})
    this.setState({damage: 0})
  }

  reset40 = async () => {
    this.setState({life: 40})
    this.setState({damage: 0})
  }

//color changing functions
  whiteClick = () => {
    this.colorWheelSelector();
    this.setState({white: !this.state.white});
  }

  blueClick = () => {
    this.islandSelector();
    this.setState({blue: !this.state.blue});
  }

  greenClick = () => {
  this.forestSelector();
  this.setState({green: !this.state.green});
}

blackClick = () => {
  this.swampSelector();
  this.setState({black: !this.state.black});
}

redClick =() => {
  this.mountainSelector();
  this.setState({red: !this.state.red})
}

// selection functions for each MTG color
  colorWheelSelector = () => {
    if(this.state.white === true){ 
      document.body.style.backgroundColor = '#E5DADA';
      document.getElementById('plainsImg').style.border = '2px solid blue';
      document.getElementById("life").style.color = "#181D27";
      document.getElementById("damageDelt").style.color = "#181D27";
    }else if(this.state.white === false){
      console.log('false')
      document.body.style.backgroundColor = '#D0E3CC';
      document.getElementById('plainsImg').style.border = 'none'
    }else{
      document.getElementById('plainsImg').style.border = 'none'
    }
  }

  islandSelector = () => {
    if(this.state.blue === true){ 
      document.body.style.backgroundColor = '#A5C4D4';
      document.getElementById('islandImg').style.border = '2px solid blue';
      document.getElementById("life").style.color = "#181D27";
      document.getElementById("damageDelt").style.color = "#181D27";
    }else if(this.state.blue === false){
      console.log('false')
      document.body.style.backgroundColor = '#D0E3CC';
      document.getElementById('islandImg').style.border = 'none'
    }else{
      document.getElementById('islandImg').style.border = 'none'
    }
  }

  forestSelector = () => {
    if(this.state.green === true){
      document.body.style.backgroundColor = '#0B6E4F';
      document.getElementById("forestImg").style.border = '2px solid blue';
      document.getElementById("life").style.color = "#181D27";
      document.getElementById("damageDelt").style.color = "#181D27";
    }else if(this.state.green === false){
      document.body.style.backgroundColor = '#D0E3CC';
      document.getElementById("forestImg").style.border = 'none';
    }else{
      document.getElementById("forestImg").style.border = 'none';
    }
  }

  mountainSelector =() => {
    if (this.state.red === true){
      document.body.style.backgroundColor = '#C44536';
      document.getElementById("mountainImg").style.border = "2px solid blue";
      document.getElementById("life").style.color = "#181D27";
      document.getElementById("damageDelt").style.color = "#181D27";
    }else if (this.state.red === false){
      document.body.style.backgroundColor = '#D0E3CC';
      document.getElementById("mountainImg").style.border = 'none';
    }else{
      document.getElementById("mountainImg").style.border = 'none';
    }
  }

  swampSelector =() => {
    if(this.state.black === true){
      document.body.style.backgroundColor = '#222222'
      document.getElementById("swampImg").style.border = "2px solid blue";
      document.getElementById("life").style.color = "#E5DADA";
      document.getElementById("damageDelt").style.color = "#E5DADA";
    } else if (this.state.black === false){
      document.body.style.backgroundColor = "#D0E3CC";
      document.getElementById("swampImg").style.border = "none";
      document.getElementById("life").style.color = "#181D27";
      document.getElementById("damageDelt").style.color = "#181D27";
    }else{
      document.getElementById("swampImg").style.border = "none";
      document.getElementById("life").style.color = "#181D27";
    }
  }

// user authorization and log in section

const

  render(){
    document.title = "DoubleStrike"
    return(
      <>
      <title>DoubleStrike</title>

      <MtgColorPicker
      plainsClick={() => this.whiteClick()}
      islandClick={() => this.blueClick()}
      forestClick={() => this.greenClick()}
      mountainClick={() => this.redClick()}
      swampClick={() => this.blackClick()}
      />
      <Lifecard
        life={this.state.life}
        addOne={this.addOneClick}
        minusOne={this.minusOneClick}
        addFive={this.addFiveClicked}
        minusFive={this.minusFiveClicked}
        damageDelt={this.state.damage}
      ></Lifecard>

      <Footer
      standard={this.reset20}
      Commander={this.reset40}
      ></Footer>
      </>
    );
  }

}

export default App;
