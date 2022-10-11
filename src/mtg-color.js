import React from "react";
import Plain from './img/Plains.jpg'
import Island from './img/island.jpg'
import Swamp from './img/swamp.jpg'
import Mountain from './img/mountain.jpg'
import Forest from './img/forest.jpg'
import './Styles/magicWheel.scss'

class MtgColorPicker extends React.Component{
render(){
    return(
        <>
        <div className="Border">
        <div className="wheel">
            <img src={Plain} alt="mtg-plains symbol" onClick={this.props.plainsClick}/>
        </div>

        <div className="green-blue">
            <img src={Island} alt="mtg-Island symbol" onClick={this.props.islandClick}/>
            <img src={Forest} alt="mtg-Forest symbol" onClick={this.props.forestClick}/>
        </div>

        <div className="black-red">
            <img src={Swamp} alt="mtg-Swamp symbol" onClick={this.props.swampClick}/>
            <img src={Mountain} alt="mtg-Mountain symbol" onClick={this.props.moutainClick}/>
        </div>
        </div>
        </>
    );
}

}

export default MtgColorPicker;