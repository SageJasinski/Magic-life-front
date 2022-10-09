import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/app.scss'
import 'react-bootstrap'
import Lifecard from './Lifecard';
import Footer from './Footer';
import MtgColorPicker from './mtg-color';

class App extends React.Component{
  render(){
    return(
      <>
      <MtgColorPicker/>
      <Lifecard
        life='20'
        damageDelt='0'
      ></Lifecard>

      <Footer></Footer>
      </>
    );
  }

}

export default App;
