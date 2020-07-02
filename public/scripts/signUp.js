const signUpBtn = document.getElementById('sign-up-btn');

const nameInputEl = document.getElementById('name');
const emailInputEl = document.getElementById('email');
const passwordInputEl = document.getElementById('psw');
const repeatInputEl = document.getElementById('psw-repeat');
const descriptionEl = document.getElementById('description');
const genderInputEl = document.getElementById('gender-select');


const usersList = JSON.parse(localStorage.getItem('users'));

/* function writeUserData(userId, name, email, password) {
  firebase.database().ref('users/' + userId).set({
    name: name,
    email: email,
    password : password
  });
} */

function validateEmail(emailInput) { 
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput))
  {
    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false)
}

function validatePassword(passwordInput, repeatPasswordInput) {
  if (passwordInput.length < 6) {
    alert('Must have password more than 6 characters!');
    return false;
  }
  else if(passwordInput !== repeatPasswordInput) {
    alert('Passwords are not equal!');
    return false;
  }
  return true;
}

function calculateUserId(users) {
  const lastUser = users[users.length - 1];
  return lastUser.id + 1;
}


function createNewUser(name, email, password, description, gender) {
  const newId = calculateUserId(usersList);
  const newUser = {
    id: newId,
    name: name,
    email: email,
    password: password,
    description: description,
    picture: '',
    gender: gender
  }


  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  console.log(users);
}


function signUpBtnHandler(e) {
  e.preventDefault()
  const nameInput = nameInputEl.value;
  const emailInput = emailInputEl.value;
  const passwordInput = passwordInputEl.value;
  const repeatPasswordInput = repeatInputEl.value;
  const descriptionInput = descriptionEl.value;
  const genderInput = genderInputEl.value;

  if (!nameInput) {
    alert ('You Must fill in your name!');
    return;
  }

  if (!validateEmail(emailInput)){
    return;
  }
  
  if (!validatePassword(passwordInput, repeatPasswordInput)) {
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput).then(
  function(result) {
    window.location.href = "../pages/login.html"
  }  )
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



}





signUpBtn.addEventListener('click', signUpBtnHandler);
