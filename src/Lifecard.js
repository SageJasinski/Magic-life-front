import React from "react";
import Button from "react-bootstrap/Button";

class Lifecard extends React.Component{
render(){
    return(
        <>
        
            <div className="life-heading">
                <Button className="minusOne" onClick={this.props.minusOne}>- 1</Button>
                <h1 className="life">{this.props.life}</h1>
                <Button className="addOne" onClick={this.props.addOne}>+ 1</Button>
            </div>

            <div className="life-card">
            <Button className="minusFive" onClick={this.props.minusFive}>- 5</Button>
            <p className="damageDelt">{this.props.damageDelt}</p>
            <Button className="addFive" onClick={this.props.addFive}>+ 5</Button>
        </div>
        </>
        );
    }
}

export default Lifecard;