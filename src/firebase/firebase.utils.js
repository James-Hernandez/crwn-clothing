import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = 
  {
    apiKey: "AIzaSyBvCePqcEscBauwQpZmXZ5a_2TVf8obvCs",
    authDomain: "crwn-db-1ba77.firebaseapp.com",
    projectId: "crwn-db-1ba77",
    storageBucket: "crwn-db-1ba77.appspot.com",
    messagingSenderId: "350650275661",
    appId: "1:350650275661:web:2c1173ff7e28bd9d688904",
    measurementId: "G-BC5P33GL21"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


