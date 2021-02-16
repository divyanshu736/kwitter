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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
                        document.getElementById("output").innerHTML = "";
                        snapshot.forEach(function (childSnapshot) {
                                          childKey = childSnapshot.key;
                                          Room_names = childKey;
                                          console.log("Room Name - " + Room_names);
                                          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                                          document.getElementById("output").innerHTML += row; }); }); }
                                          getData();

                                          function redirectToRoomName(name) {
                                                console.log(name);
                                                localStorage.setItem("room_name", name);
                                                window.location = "kwitter_page.html";
                                          }

                                          function logout(){
                                                localStorage.removeItem("user_name");
                                                localStorage.removeItem("room_name");
                                                window.location = "index.html";
                                          }