  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDLRCtZuemEBSIktsnty-toHaCexaX09Q4",
    authDomain: "sss3-4686a.firebaseapp.com",
    projectId: "sss3-4686a",
    storageBucket: "sss3-4686a.firebasestorage.app",
    messagingSenderId: "1054390493079",
    appId: "1:1054390493079:web:68553d2d904a12c86c2ed2",
    measurementId: "G-KM58E2Q9T4"
  };

  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  var auth = firebase.auth();