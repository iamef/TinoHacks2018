(function (){

  var config = {
    apiKey: "AIzaSyA2PneCVrqWWpYZ2dc4DqsDjpgx9-LqD0A",
    authDomain: "beleaf-757a3.firebaseapp.com",
    databaseURL: "https://beleaf-757a3.firebaseio.com",
    projectId: "beleaf-757a3",
    storageBucket: "beleaf-757a3.appspot.com",
    messagingSenderId: "137843209902"
  };
  firebase.initializeApp(config);
  // Get elements

  const txtEmail=document.getElementById('txtEmail');
  const txtPassword=document.getElementById('txtPassword');
  const btnLogin=document.getElementById('btnLogin');
  const txtSignUp=document.getElementById('btnSignUp');
  const txtLogout=document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise= auth.signInWithEmailAndPassword(email, password);
     promise.catch( e => console.log(e.message));
  }
)
}())
