const firebaseConfig = {
    apiKey: "AIzaSyBkoHClU8h1DlD4U1sFkbaxIM0N6Y2QH-A",
    authDomain: "estatehub-fe927.firebaseapp.com",
    projectId: "estatehub-fe927",
    storageBucket: "estatehub-fe927.appspot.com",
    messagingSenderId: "1042136791315",
    appId: "1:1042136791315:web:9341ef3f0d8d0142aa82e6",
    measurementId: "G-HX617RDKQN"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get references to DOM elements
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');
  
  // Add event listener to the login form
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Redirect to the home page if authorized
        alert("Logged in Successfuly")
        window.location.href = 'index/login-page/index/main.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        // Display error message
        errorMessage.innerText = errorMessage;
      });
  });
  