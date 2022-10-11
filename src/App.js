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
      white: false,
    }
  }

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

  reset20 = async () => {
    this.setState({life: 20})
    this.setState({damage: 0})
  }

  reset40 = async () => {
    this.setState({life: 40})
    this.setState({damage: 0})
  }

  whiteClick = async () => {
    this.setState({white: !this.state.white})
  }

  colorWheelSelector = async () => {
    console.log("here");
    let detectWhite = this.state.white ?  ("body").css(" background-color", "white") : '';
    return detectWhite;
  }
  
  render(){
    return(
      <>
      <MtgColorPicker
      plainsClick={this.whiteClick}
      
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
