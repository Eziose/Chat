import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCun6rTA-BY3KJkQaWvdg3Em9v5sYkbJFU",
  authDomain: "chat-vuejs-c680b.firebaseapp.com",
  databaseURL: "https://chat-vuejs-c680b.firebaseio.com",
  projectId: "chat-vuejs-c680b",
  storageBucket: "chat-vuejs-c680b.appspot.com",
  messagingSenderId: "115162110614"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore()