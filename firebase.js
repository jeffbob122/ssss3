

    // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// import { getFirestore, collection, getDocs, query, where, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"


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

firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  const auth = firebase.auth();

  const database = firebase.firestore();

  var userID = firebase.auth().currentUser

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
        // User is already signed in, redirect to dashboard
       
    userID = user.uid;

    console.log("Logged In");
    console.log(userID);

        // Save authentication state to localStorage
        localStorage.setItem('user', JSON.stringify(user));

     database.collection("users").doc(userID).get().then(function(doc) {
    if(doc.exists) {
        console.log("Document data: ", doc.data());

        // access users data
        var email = doc.data().email;
        var name = doc.data().fullname;
        var disbursement_fee = doc.data().disbursementFee;
        var over_age_payment = doc.data().overAgePayment;

        var status = doc.data().isApproved;

        // var phone_number = doc.data().phoneNumber;
        // var dob = doc.data().dob;
        // var city = doc.data().city;
        // var street = doc.data().street;
        // var state = doc.data().state;
        // var gender = doc.data().gender;
        // var marital_status = doc.data().maritalStatus;
        // var dependants = doc.data().dependants;
          
        // var annual_income = doc.data().annnualIncome;
        // var employment_status = doc.data().employmentStatus;
        // var tax_identification_number = doc.data().taxIdentificationNumber;
        
        var account_number = doc.data().accountNumber;
        var routing_number = doc.data().routingNumber;
        var bank_name = doc.data().bankName;
        var bank_address = doc.data().bankAddress;

        // var purpose_of_grant = doc.data().purposeOfGrant;
        // var detail_of_grant_purpose = doc.data().detailProposeOfGrant;
        var applied_amount = doc.data().appliedAmount;
        var confirmed_amount = doc.data().confirmedAmount;

        var paypal = doc.data().paypal;
        var zelle = doc.data().zelle;
        var cashapp = doc.data().cashapp;
	var btcAddress = doc.data().bitcoinAddress;

        // var modalLock = doc.data().lock;

        //test
        console.log(email, name, bank_address);

    var fullname = document.getElementById('userName');
    if (fullname != null) {
      fullname.innerText = name;
    }

    var userEmail = document.getElementById('userEmail');
    if (userEmail != null ) {
      userEmail.textContent = email;
    }

    var appliedAmount = document.getElementById('appliedAmount');
    if (appliedAmount != null) {
      appliedAmount.innerText = applied_amount;
    }

    var confirmedAmount = document.getElementById('confirmedAmount');
    if (confirmedAmount != null) {
      confirmedAmount.innerText = confirmed_amount;
    }

    var beneficiaryBank = document.getElementById('beneficiaryBank');
    if (beneficiaryBank != null) {
      beneficiaryBank.innerText = bank_name;
    }

    var accountNumber = document.getElementById('accountNumber');
    if (accountNumber != null) {
      accountNumber.innerText = account_number;
    }

    var routingNumber = document.getElementById('routingNumber');
    if (routingNumber != null) {
      routingNumber.innerText = routing_number;
    }

    var beneficiaryBankAddress = document.getElementById('beneficiaryBankAddress');
    if (beneficiaryBankAddress != null) {
      beneficiaryBankAddress.innerText = bank_address;
    }

    var disbursementFee = document.getElementById('disbursementFee');
    if (disbursementFee != null) {
      disbursementFee.innerText = disbursement_fee
    }

    var payPal = document.getElementById('paypal');
    if (payPal != null) {
      payPal.innerText = paypal;
    }

    var _zelle = document.getElementById('zelle');
    if (_zelle != null) {
      _zelle.innerText = zelle;
    }

    var cashApp = document.getElementById('cashapp');
    if (cashApp != null) {
      cashApp.innerText = cashapp;
    }

    var btcAddy = document.getElementById('btcaddress');
    if (btcAddy != null) {
      btcAddy.innerText = btcAddress;
    }

    var statusMessageDiv = document.getElementById('statusMessage');
if (status === true) {
    statusMessageDiv.innerHTML = '<div class="alert alert-success"><p>Your Grant Application has been Approved</p></div>';
} else {
    statusMessageDiv.innerHTML = '<div class="alert alert-warning"><p>Your Grant Application is Pending Approval</p></div>';
}


// dashboard issue of not displaying single user name variable to multiple tag, needs an extra 1 and 2 username variable
// var username2 = document.getElementById('user-name-2');
// if (username2 !== null) {
//   username2.innerText = name2;
// }

// var username3 = document.getElementById('user-name-3');
// if (username3 !== null) {
//   username3.innerText = name3;
// }


// var lockElement = document.getElementById('modal-lock');
// if (modalLock == 'upgrade') {
//   lockElement.style.display = 'flex';
//   document.getElementById('lock-text').innerText = 'UPGRADE LOCK DETECTED';
// } else if (modalLock == 'signal') {
//   lockElement.style.display = 'flex';
//   document.getElementById('lock-text').innerText = 'SIGNAL LOCK DETECTED';
// }
  

    } else {
    console.log("nothing here")
  }
    
}).catch(function(error) {
    console.log("Error getting document:", error)
});  


 document.getElementById('signout').addEventListener('click', function(){
  auth.signOut().then(() => {
    console.log("User signed out successfully.");
    localStorage.removeItem('user'); // Remove auth state from storage
    window.location = "form-index.html";
  }).catch(error => {
    console.error("Error signing out: ", error);
  });

});

return;
    
  } else if (window.location.pathname !== 'signin.html') {
    // Check if user authentication state is saved in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      window.location.pathname = "dashboard.html";
    } else {
      window.location.pathname = "signin.html";
    }
   
  }

})
