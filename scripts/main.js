let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lv.jpg') {
      myImage.setAttribute('src', 'images/li.jpg');
    } else {
      myImage.setAttribute('src', 'images/lv.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
 if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '伟成帅哥帅爆了' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '伟成帅哥帅爆了' + storedName;
}
myButton.onclick = function() {
   setUserName();
}