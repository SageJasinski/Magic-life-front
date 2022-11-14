import React from "react";
// import firebase from 'firebase/app';
import 'firebase/compat/auth';
import "firebase/auth"
import googleSignIn from "./Firebase";

class SignIn extends React.Component{
    

    render(){
        return(
            <>
                <p> Please Sign in</p>
                <button onClick={googleSignIn}>Sign-In for an epic adventure</button>
            </>
        );
    }
}

export default SignIn;