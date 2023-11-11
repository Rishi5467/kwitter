const firebaseConfig = {
      apiKey: "AIzaSyAf5rVU15Pg59sX8T0R0f7lHa-CXbAzuGM",
      authDomain: "kwitter-3c70d.firebaseapp.com",
      databaseURL: "https://kwitter-3c70d-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c70d",
      storageBucket: "kwitter-3c70d.appspot.com",
      messagingSenderId: "195913664614",
      appId: "1:195913664614:web:fe229b5470ba22965c85a7",
      measurementId: "G-YYDQRD6F7N"
    };
    
firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      windowlocation="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}