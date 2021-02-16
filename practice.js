
var firebaseConfig = {
    apiKey: "AIzaSyAKtaOBOJz570EJaaMSgF2LSBV5R7-rcnI",
    authDomain: "classtest1-a7696.firebaseapp.com",
    databaseURL: "https://classtest1-a7696.firebaseio.com",
    projectId: "classtest1-a7696",
    storageBucket: "classtest1-a7696.appspot.com",
    messagingSenderId: "513652294048",
    appId: "1:513652294048:web:85a0377749676008e2e4c5",
    measurementId: "G-HG1K26V2MP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
       purpose:"adding user" 
    });
}