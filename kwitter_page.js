//YOUR FIREBASE LINKS
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

username=localStorage.getItem("Nickname");
room_name=localStorage.getItem("roomname");
function send(){
      msg=document.getElementById("msg_input").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      });
      document.getElementById("msg_input").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message= message_data['message'];
like=message_data['likes'];
name_with_tag= "<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='up(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("Nickname");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

function up(message_id){
      console.log("clicked on the like button -"+message_id);
      button_id=message_id;
      likes = document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}


