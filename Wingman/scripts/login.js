
const submitBtn = document.getElementById("submit");
const inputUser = document.getElementById("user-name");
const inputPassword = document.getElementById("password");

localStorage.setItem('userName', 'nadav');
localStorage.setItem('password', '123456');


function validateUserAndPassword() {
  const userNameInput = document.getElementById("user-name").value;
  const passwordInput = document.querySelector("#password").value;

  if (userNameInput === localStorage.getItem('userName')) {
    if (passwordInput === localStorage.getItem('password')) {
      console.log('Connected successfully!');
      window.location.href = "./index.html";
    }
    else {
      console.log('Password incorrect!')
    }
  }
  else {
    console.log(`User name doesn't exist!`);
  }
}



//-----------------Login With FACEBOOK-----------------------------------------------


function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    testAPI();  
  } else {                                 // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}


function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}


window.fbAsyncInit = function() {
  FB.init({
    appId      : '575165436460366',
    cookie     : true,                     // Enable cookies to allow the server to access the session.
    xfbml      : true,                     // Parse social plugins on this webpage.
    version    : 'v2.8'           // Use this Graph API version for this call.
  });


  FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
    statusChangeCallback(response);        // Returns the login status.
  });
};


(function(d, s, id) {                      // Load the SDK asynchronously
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me',{ locale: 'en_US', fields: 'name, email,picture' } , function(response) {
    console.log('Successful login for: ' + response.name);
    // localStorage.setItem('fbUserName',response.name);
    // localStorage.setItem('fbUserEmail')
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + ' ' + response.email + response.picture + '!';
  });
}





submitBtn.addEventListener("click", validateUserAndPassword);
inputUser.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  
    validateUserAndPassword();
  }
});

inputPassword.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  
    validateUserAndPassword();
  }
});