import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyBvjdDTguW4DAp72g5P-ncHPMQK_GPHLWQ",
    authDomain: "netflix-clone-scrimba-e8087.firebaseapp.com",
    databaseURL: "https://netflix-clone-scrimba-e8087-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-clone-scrimba-e8087",
    storageBucket: "netflix-clone-scrimba-e8087.appspot.com",
    messagingSenderId: "1020355608119",
    appId: "1:1020355608119:web:b8e9353d6ff1fbdbf209b2"
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);