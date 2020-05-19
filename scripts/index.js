const currentProfileCardElement = document.getElementById("current-profile-div");
const friendListElement = document.getElementById('friends-list');
const trashCan = document.getElementById('garbage');

let girlIndex = 0;
const girlsArray = JSON.parse(localStorage.getItem('girls'));
console.log(girlsArray);
const currentProfileCard = girlsArray[girlIndex];
friendsArray = JSON.parse(localStorage.getItem('chosenFriends'));
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







currentProfileCardElement.addEventListener("mousedown", dragNDrop);

function dragNDrop(event) {
  currentProfileCardElement.classList.add('move');
  let shiftX = event.clientX - currentProfileCardElement.getBoundingClientRect().left;
  let shiftY = event.clientY - currentProfileCardElement.getBoundingClientRect().top;

  currentProfileCardElement.style.position = 'absolute';
  currentProfileCardElement.style.zIndex = 1000;
  document.body.append(currentProfileCardElement);

  moveAt(event.pageX, event.pageY);

  // moves the ball at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    currentProfileCardElement.style.left = pageX - shiftX + 'px';
    currentProfileCardElement.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the ball, remove unneeded handlers
  currentProfileCardElement.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    currentProfileCardElement.onmouseup = null;
    currentProfileCardElement.classList.remove('move');
  };

};

currentProfileCardElement.ondragstart = function() {
  return false;
};