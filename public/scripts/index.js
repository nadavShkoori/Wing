// const { user } = require("firebase-functions/lib/providers/auth");

//const { user } = require("firebase-functions/lib/providers/auth");

const currentProfileCardElement = document.getElementById("current-profile-div");
const friendListElement = document.getElementById('friends-list');
const trashCan = document.getElementById('garbage');



let usersArray = [];
let girlsArray = [];
let friendsArray = [];


//get users from Firerbase
db.collection('users').get().then((snapshot => {
  snapshot.docs.forEach(doc => {
    usersArray.push(doc.data()); 
  });
})).then(() => {
  for (user of usersArray) {
    if (user.gender === "female") {
      girlsArray.push(user);
    } else if (user.gender === "male") {
      friendsArray.push(user);
    }
  }


console.log(usersArray);

let girlIndex = 0;


console.log(girlsArray);
const currentProfileCard = girlsArray[girlIndex];
console.log(friendsArray);



function addMatchToFriend(friendId) {
  for (friend of friendsArray) {
    if (friend.userId === friendId) {
      friend.matches.push(currentProfileCard);
      break;
    }
  }
  console.log(friendsArray);
  // currentProfileCardElement.remove();
  girlIndex++;
  renderCurrentProfile();
}

function removeProfileCard() {
  girlIndex++;
  renderCurrentProfile();
}


function renderCurrentProfile() {
  if (girlIndex > 3) {
    currentProfileCardElement.remove();
    const noMoreProfilesElement = document.createElement('text');
    noMoreProfilesElement.id = 'no-profiles';
    noMoreProfilesElement.innerHTML = 'No More Profiles';
    const body = document.querySelector('body');
    body.appendChild(noMoreProfilesElement);
    trashCan.removeEventListener('click', removeProfileCard);
    friendListElement.removeEventListener('click', friendMatchHandler);
  }
  else {
    const imgElement = currentProfileCardElement.querySelector('img');
    imgElement.src = girlsArray[girlIndex].picture;
    const currProfileName = currentProfileCardElement.querySelector('h1');
    currProfileName.innerHTML = girlsArray[girlIndex].name;
    const currProfileDescription = currentProfileCardElement.querySelector('p');
    currProfileDescription.innerHTML = girlsArray[girlIndex].description;
  }
}

function renderFriends() {
  for (friend of friendsArray) {
    const currFriendDiv = document.createElement('div');
    currFriendDiv.className = "friend-box";
    currFriendDiv.id = `${friend.userId}`;
    friendListElement.appendChild(currFriendDiv);
    const currFriendImg = document.createElement('img');
    currFriendImg.src = friend.picture;
    currFriendImg.className = "friend-pictures";
    currFriendDiv.appendChild(currFriendImg);
    const currFriendName = document.createElement('text');
    currFriendName.innerHTML = friend.name;
    currFriendDiv.appendChild(currFriendName);
    linebreak = document.createElement("br");
    friendListElement.appendChild(linebreak);
  }
}

function appInit() {
  renderCurrentProfile();
  renderFriends();
}

function friendMatchHandler(event) {
  const chosenFriendDiv = event.target.parentElement;
  const friendId = parseInt(chosenFriendDiv.id, 10);
  addMatchToFriend(friendId);
}


appInit();

friendListElement.addEventListener("click", friendMatchHandler);



trashCan.addEventListener("click", removeProfileCard);

});

