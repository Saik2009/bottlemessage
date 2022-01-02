
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCTlu9AyXQ51whlCvbUT4HpwHW1wLTU4y4",
      authDomain: "kwitter-8c794.firebaseapp.com",
      databaseURL: "https://kwitter-8c794-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c794",
      storageBucket: "kwitter-8c794.appspot.com",
      messagingSenderId: "995590122730",
      appId: "1:995590122730:web:8fb7a3996bbcea81833b93"
    };

    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

nickname=localStorage.getItem("Nickname");
document.getElementById("greeting").innerHTML="Welcome "+nickname+"!";

function add_room()
{
      roomname= document.getElementById("room_name_input").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"add room name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Nickname");
      localStorage.removeItem("roomname");
      window.location="index.html";
}