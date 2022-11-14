import React from "react";
import App from './App.js';
import SignIn from './SignIn.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { render } from "@testing-library/react";
// import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCc0zvdHqNxAUso3kD0c62l002gR8y-0AA",
    authDomain: "doublestrike-56af1.firebaseapp.com",
    databaseURL: "https://doublestrike-56af1-default-rtdb.firebaseio.com",
    projectId: "doublestrike-56af1",
    storageBucket: "doublestrike-56af1.appspot.com",
    messagingSenderId: "785391149004",
    appId: "1:785391149004:web:7cfa0920b1548cc9600769",
    measurementId: "G-C0CFNQ88ED"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


  const googleSignIn = () => {
    const provision = new GoogleAuthProvider();
    
    signInWithRedirect(auth, provision).then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    }).catch(console.error());
};

//   class FirePass extends React.Component{
//     render(){
//         return(
//             <>
//             {}
//             </>
//         );
//     }      
// }



export default googleSignIn;