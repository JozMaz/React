import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdB1hUDpkLu98qxPAxEXtnEpbOyAWJclQ",
  authDomain: "movies-projec.firebaseapp.com",
  projectId: "movies-projec",
  storageBucket: "movies-projec.firebasestorage.app",
  messagingSenderId: "337507060923",
  appId: "1:337507060923:web:1bd0c22f644e87b055ad9e",
  measurementId: "G-4XX2GVF3EY"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export { db }