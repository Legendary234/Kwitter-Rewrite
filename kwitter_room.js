import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD_Lz5oV-0Hw0WO0Bgge0R0v6TrWiM87sw",
    authDomain: "kwitter-eedf3.firebaseapp.com",
    databaseURL: "https://kwitter-eedf3-default-rtdb.firebaseio.com",
    projectId: "kwitter-eedf3",
    storageBucket: "kwitter-eedf3.appspot.com",
    messagingSenderId: "387602598132",
    appId: "1:387602598132:web:1d96c4cb32fead762036a1",
    measurementId: "G-PX7GP7T971"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "kwitter_room.html";
}

function addroom() {
    room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
       console.log("room_name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToroomname(name){
 console.log(name);
 localStorage.setItem("Roomname",name);
 window.location = "kwitter_page.html";
}
function logout() {
 localStorage.removeItem("Username");
 localStorage.removeItem("Roomname");
 window.location = "index.html";
}
function send() {
  msg = document.getElementById("msg").value;
  console.log("Message "+msg);
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0,
        dislike:0
        function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
 //Start code
       
 //End code
       } });  }); }
 getData();