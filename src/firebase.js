import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAoYe6ztoFh-PrLQj98Cbvrgx9WV9KmQ34",
    authDomain: "bewakoof-clone.firebaseapp.com",
    databaseURL: "https://bewakoof-clone.firebaseio.com",
    projectId: "bewakoof-clone",
    storageBucket: "bewakoof-clone.appspot.com",
    messagingSenderId: "413195317016",
    appId: "1:413195317016:web:f9307c9a53ef1d79b4f86d",
    measurementId: "G-QFRFQ6TB2F"
});

const auth = firebase.auth();

export { auth };