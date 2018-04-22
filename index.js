firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

      if(user != null){

        var email_id = document.getElementById('email_field').value;

      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";


    }

  }
  else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){
  if (firebase.auth().currentUser){
    firebase.auth().signOut();
  }
  else{

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
    if (userEmail.length <4){
      window.alert("please enter an email address.");
      return;
    }
    if (userPass.length < 4){
      window.alert("please enter a password.");
      return;
    }
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === 'auth/invalid-email'){

      window.alert("wrong email");
      return;
    }

    if (errorCode === 'auth/wrong-password'){
      window.alert("wrong password");
      return;
    }

    else{
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
    }

    // window.alert("Error : " + errorMessage);

    // ...
  });
}
}

function create_account(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

  if (userEmail.length < 4){
    window.alert("please enter a valid email address.")
    return;
  }

  if (errorCode === 'auth/invalid-email'){

    window.alert("please enter a valid email");
    return;
  }
  
  if (userPass.length < 4){
    window.alert("Your password should be at least 5 characters.")
    return;
  }


    if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
          return;
        }
        else {
          document.getElementById("user_div").style.display = "block";
          document.getElementById("login_div").style.display = "none";
        }



  });
}

function logout(){
  firebase.auth().signOut()
  document.getElementById('email_field').value = '';
  document.getElementById('password_field').value = '';
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
}
