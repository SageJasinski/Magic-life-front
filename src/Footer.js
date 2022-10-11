import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import './Styles/footer.scss'

class Footer extends React.Component{
    render(){
        return(
            <>
            <Navbar>
                <Container>
                    <Button onClick={this.props.yugio}>Yugio</Button>
                    <Button onClick={this.props.standard}>MTG: Standard</Button>
                    <Button onClick={this.props.Commander}>MTG: Commander</Button>
                    <Button onClick={this.props.FAB}>Flesh and Blood</Button>
                </Container>
            </Navbar>
            
            
            </>
        );
    }
}

export default Footer;