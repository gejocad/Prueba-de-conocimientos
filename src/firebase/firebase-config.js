import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCMZLybs2KpYDh-y3VmWUoti4WteEU_lnU",
  authDomain: "weather-f24a1.firebaseapp.com",
  projectId: "weather-f24a1",
  storageBucket: "weather-f24a1.appspot.com",
  messagingSenderId: "760486054241",
  appId: "1:760486054241:web:c41ab50bde4503e4655d20"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}