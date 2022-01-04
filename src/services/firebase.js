import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAKA_bSfUmn2BHMT2s0C4xYP-DcsRXU1pI",
    authDomain: "chatty-db20f.firebaseapp.com",
    databaseURL: "https://chatty-db20f-default-rtdb.firebaseio.com",
    projectId: "chatty-db20f",
    storageBucket: "chatty-db20f.appspot.com",
    messagingSenderId: "939391177864",
    appId: "1:939391177864:web:2d892f8ef4dc679b3f7b3d",
    measurementId: "G-8YVD74NZJ9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();