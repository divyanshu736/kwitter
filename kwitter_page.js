var firebaseConfig = {
      apiKey: "AIzaSyCwqhaKzliVO0gOFBsFrctiei0Pxz7Q33A",
      authDomain: "kwitter-c-97.firebaseapp.com",
      databaseURL: "https://kwitter-c-97.firebaseio.com",
      projectId: "kwitter-c-97",
      storageBucket: "kwitter-c-97.appspot.com",
      messagingSenderId: "221809565536",
      appId: "1:221809565536:web:fc8987b213ef1aa7a00805",
      measurementId: "G-VKPTFM3EM5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(Firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";  
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();
function updateLike(message_id){
     console.log("clicked on like button-"+message_id);
     button_id=message_id;
     likes=document.getElementById(button_id).value;
     updated_likes=Number(likes)+1;
     console.log(updated_likes);
     firebase.database().ref(room_name).child(message_id).update({
           like:updated_likes
     }); 
}
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
      });
      console.log(msg);
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}