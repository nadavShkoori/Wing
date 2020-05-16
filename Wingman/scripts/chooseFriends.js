const friendListElement = document.getElementById('myUL');
// const AllfriendsArray = JSON.parse(localStorage.getItem('friends'));
const chosenFriends = [];

friendsArray = JSON.parse(localStorage.getItem('friends'));
console.log(friendsArray);





function renderFriends(size) {
  for (let i = 0; i < size; i++) {
    const currFriend = document.createElement('li');
    //currFriend.className = "friend-box";
    
    friendListElement.appendChild(currFriend);
    const currFriendName = document.createElement('a');
    currFriendName.id = `${friends[i].userId}`;
    currFriendName.innerHTML = friendsArray[i].name;
    currFriend.appendChild(currFriendName);
    const currFriendImg = document.createElement('img');
    currFriendImg.src = friendsArray[i].picture;
    currFriendImg.className = "friend-list-pictures";
    currFriendName.appendChild(currFriendImg);
    //currFriend.appendChild(currFriendName);
    //linebreak = document.createElement("br");
    //friendListElement.appendChild(linebreak);
  }
}

renderFriends(5);

function filter() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}


function removeElement(elementId) {
  var element = document. getElementById(elementId);
  element. parentNode. removeChild(element);
}


friendListElement.addEventListener("click", event => {
  currId = parseInt(event.target.id);
  for (friend of friendsArray) {
    if (friend.userId === currId) {
      chosenFriends.push(friend);
    }
  }

removeElement(currId);
console.log(chosenFriends);
})