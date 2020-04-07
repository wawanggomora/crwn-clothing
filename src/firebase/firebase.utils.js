import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCRxQED47XTGyVQ9LIS2XMWOcY5s-xTimY",
	authDomain: "crwn-db-7b9e1.firebaseapp.com",
	databaseURL: "https://crwn-db-7b9e1.firebaseio.com",
	projectId: "crwn-db-7b9e1",
	storageBucket: "crwn-db-7b9e1.appspot.com",
	messagingSenderId: "308493261681",
	appId: "1:308493261681:web:074fbabe44cf44743174d0",
	measurementId: "G-CM2KEQ0ETX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
