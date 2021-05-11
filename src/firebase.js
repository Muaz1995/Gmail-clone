import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAjJr3mnbal2vrSjfiit5ppLQWS1TOAtRI",
    authDomain: "clone-58bbf.firebaseapp.com",
    projectId: "clone-58bbf",
    storageBucket: "clone-58bbf.appspot.com",
    messagingSenderId: "1093377892709",
    appId: "1:1093377892709:web:8110458e1630e3330b418c"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider}; 