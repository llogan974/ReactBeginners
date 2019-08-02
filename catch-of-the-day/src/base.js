import Rebase from 're-base';
import firebase from "firebase";

// from googles firebase dashboard
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAn6B9b2U3mpWz77xbQ5Cfil2mGKkfRATs",
        authDomain: "catch-of-the-day-luke-e9d73.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-luke-e9d73.firebaseio.com",
});

// create the database to export
const base = Rebase.createClass(firebaseApp.database());

// Export a named export
export {firebaseApp};

// Exoirt the variable created above
export default base;
