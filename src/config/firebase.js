import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCzo2T1hdugII-0A3LtKvfE9mr0YHZ-Gek",
    authDomain: "marioplan-d9544.firebaseapp.com",
    databaseURL: "https://marioplan-d9544.firebaseio.com",
    projectId: "marioplan-d9544",
    storageBucket: "",
    messagingSenderId: "240416443687",
    appId: "1:240416443687:web:71f17170d72b3739"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});

  export default firebase;