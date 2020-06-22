import firebase from 'firebase'
  // Your web app's Firebase configuration
var Config = {
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    authDomain: "t4ir-blockchain.firebaseapp.com",
    databaseURL: "https://t4ir-blockchain.firebaseio.com",
    projectId: "t4ir-blockchain",
    storageBucket: "t4ir-blockchain.appspot.com",
    messagingSenderId: "355552332786",
    appId: "1:355552332786:web:0f33aec23fcf8dc34d796b",
    measurementId: "G-50TDF7P06W"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(Config);

export default firebaseApp.firestore()
