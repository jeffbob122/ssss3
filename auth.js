function initializeApp() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDLRCtZuemEBSIktsnty-toHaCexaX09Q4",
    authDomain: "sss3-4686a.firebaseapp.com",
    projectId: "sss3-4686a",
    storageBucket: "sss3-4686a.firebasestorage.app",
    messagingSenderId: "1054390493079",
    appId: "1:1054390493079:web:68553d2d904a12c86c2ed2",
    measurementId: "G-KM58E2Q9T4"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  const auth = firebase.auth();

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     // Save authentication state to localStorage
  //     localStorage.setItem('user', JSON.stringify(user));

  //     window.location.href = 'dashboard.html';
  //     return;
  //   }
  // });


// Registration function
let registerButton = document.getElementById('apply_now');
if (registerButton) {
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Register button clicked');

        // Show the loading popup during registration
        document.getElementById('loadingPopup').style.display = 'block';

    // Get the values of the password and confirm password fields
    var userPassword = document.getElementById('acct_password').value;
    var confirmPassword = document.getElementById('confirm_acct_password').value;

    // Perform the check if they are the same
    if (userPassword !== confirmPassword) {
      // If passwords don't match, display an error message or take appropriate action
      alert("Passwords don't match. Please try again.");
      return;
    }

    //personal info
    var email = document.getElementById('acct_email').value;
    var fullname = document.getElementById('acct_name').value;
    var dob = document.getElementById('acct_dob').value;
    var phoneNumber = document.getElementById('acct_phone').value;
    var city = document.getElementById('acct_address_city').value;
    var houseNumber = document.getElementById('acct_address_number').value;
    var street = document.getElementById('acct_address_street').value;
    var state = document.getElementById('acct_address_state').value;
    var gender = document.querySelector('input[name="acct_gender"]:checked').value;
    var maritalStatus = document.getElementById('marital_status').value;
    var dependants = document.getElementsByName('dependants')[0].value;

    //financial info
    var annnualIncome = document.getElementsByName('annual_income')[0].value;
    var employmentStatus = document.getElementsByName('employment_status')[0].value;
    var taxIdentificationNumber = document.getElementsByName('tin')[0].value;

    //bank info
    var accountNumber = document.getElementsByName('account_number')[0].value;
    var routingNumber = document.getElementsByName('routing_number')[0].value;
    var bankName = document.getElementsByName('name_of_bank')[0].value;
    var bankAddress = document.getElementsByName('bank_address')[0].value;

    //purpose of application
    var purposeOfGrant = document.getElementById('purpose_of_grant').value;
    var detailProposeOfGrant = document.getElementsByName('grant_desc')[0].value;
    var appliedAmount = document.getElementsByName('amount_applied')[0].value;

    appliedAmount = "$" + appliedAmount;

    console.log(email);
    console.log(userPassword);
    console.log(fullname);

    // Create the user with email and password
    auth.createUserWithEmailAndPassword(email, userPassword)
      .then((userCredential) => {
        // Set the additional user information in the Firebase Firestore or Realtime Database
        var user = userCredential.user;
        console.log('User', user.email);
        console.log(user.uid);

        var userDocRef = firebase.firestore().collection('users').doc(user.uid);

        // Example: Store additional user information in Firestore
        return userDocRef.set({
          fullname: fullname,
          email: email,
          // isVerified: false,
          isApproved: false,
          disbursementFee: '$0.00',
          overAgePayment: '',

          phoneNumber: phoneNumber, 
          houseNumber: houseNumber,
          dob: dob,
          city: city,
          street: street,
          state: state, 
          gender: gender,
          maritalStatus: maritalStatus,
          dependants: dependants,

          annnualIncome: annnualIncome,
          employmentStatus: employmentStatus,
          taxIdentificationNumber: taxIdentificationNumber,

          accountNumber: accountNumber,
          routingNumber: routingNumber,
          bankName: bankName,
          bankAddress: bankAddress,

          purposeOfGrant: purposeOfGrant,
          detailProposeOfGrant: detailProposeOfGrant,
          appliedAmount: appliedAmount,

          confirmedAmount: "$0.00",

          paypal: 'nill',
          zelle: 'nill',
          cashapp: 'nill',
          zelle: 'nill',
          bitcoinAddress: 'nill',
          applePay: 'nill',
          venmo: 'nill'
        });
      })
      .then(() => {
        console.log('User data added to Firestore successfully.');
        
        // Save authentication state to localStorage
        localStorage.setItem('user', JSON.stringify(auth.currentUser));
          // After successful registration
        // Hide the loading popup
        document.getElementById('loadingPopup').style.display = 'none';
        // Redirect to the dashboard after successful registration
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        alert(error);

        document.getElementById('loadingPopup').style.display = 'none';

      });
  });
}

  // Sign in function
  let loginButton = document.getElementById('login_user');
  if (loginButton) {
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Login button clicked");

         // Show the loading popup during registration
         document.getElementById('loadingPopup').style.display = 'block';


      var email = document.getElementById("email-field").value;
      var password = document.getElementById("password").value;

      console.log(email);
      console.log(password);

      auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
        console.log("User", user.email);
          // After successful registration
        // Hide the loading popup
        document.getElementById('loadingPopup').style.display = 'none';

        window.location = "dashboard.html";
      }).catch((error) => {
        var errorCode = error.errorCode;
        var errorMessage = error.message;
        alert(errorMessage);
        document.getElementById('loadingPopup').style.display = 'none';

      });
    });
  }
}

// Call the initializeApp function after the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
