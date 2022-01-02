function uploadnickname(){
    
    nn=document.getElementById("nickname").value;
    localStorage.setItem("Nickname",nn);
    console.log(nn);
    window.location="kwitter_room.html";
}