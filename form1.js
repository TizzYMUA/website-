// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBAxEFnxdhYRWvRp-7NpiDvjbvQKfTERJY",
  authDomain: "form-58ec6.firebaseapp.com",
  projectId: "form-58ec6",
  storageBucket: "form-58ec6.appspot.com",
  messagingSenderId: "239117821742",
  appId: "1:239117821742:web:cedf82d5a9b91b0f5d3cbf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

function signUp(){

var email= document.getElementById("email");
var password= document.getElementById("password");

const promise =auth.createUserWithEmailAndPassword(email.value,password.value);
promise.catch(e =>alert(e.message));
alert("Signed Up");
}
function signIn(){

var email= document.getElementById("email");
var password= document.getElementById("password");

const promise =auth.signInWithEmailAndPassword(email.value,password.value);
promise.catch(e =>alert(e.message));
alert("Signed In" + email.value);


}
function signOut(){
auth.signOut();
alert("Signed out");

}

auth.onAuthStateChanged(function(user){
if(user){
  var email=user.email;
  alert("Active user" + email);
}else{
  alert("No user is signed in");
}

});
