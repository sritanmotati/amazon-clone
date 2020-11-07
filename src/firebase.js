import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuCmLwwIQ4W7wVtBsnmQlEgwQy9-JBcLQ",
    authDomain: "clone-6cd05.firebaseapp.com",
    databaseURL: "https://clone-6cd05.firebaseio.com",
    projectId: "clone-6cd05",
    storageBucket: "clone-6cd05.appspot.com",
    messagingSenderId: "935916577808",
    appId: "1:935916577808:web:4623541c2834992e3e1695",
    measurementId: "G-VS1E3Y40DD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};