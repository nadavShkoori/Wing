const friendListElement = document.getElementById('myUL');
const chosenFriends = [];
const continueBtn = document.getElementById('continue');


friendsArray = JSON.parse(localStorage.getItem('friends'));
console.log(friendsArray);

const userName = localStorage.getItem('userName');
console.log(userName);


function renderFriends(userName) {
  for (friend of friendsArray) {
    if (friend.friendWith === userName) {
      const currFriend = document.createElement('li');  
      friendListElement.appendChild(currFriend);
      const currFriendName = document.createElement('a');
      currFriendName.id = `${friend.userId}`;
      currFriendName.innerHTML = friend.name;
      currFriend.appendChild(currFriendName);
      const currFriendImg = document.createElement('img');
      currFriendImg.src = friend.picture;
      currFriendImg.className = "friend-list-pictures";
      currFriendName.appendChild(currFriendImg);   
    }
  }

}


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
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}







renderFriends(userName);




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


continueBtn.addEventListener('click', () => {
  const jsonChosenFriends = JSON.stringify(chosenFriends);
  localStorage.setItem('chosenFriends', `${jsonChosenFriends}`);
  window.location.href = "./index.html";
})