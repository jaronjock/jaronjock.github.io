let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/453px-Mozilla_Firefox_logo_2013.svg.png') {
      myImage.setAttribute('src','images/Chrome__logo.max-500x500.png');
    } else {
      myImage.setAttribute('src','images/453px-Mozilla_Firefox_logo_2013.svg.png');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  

myButton.onclick = function(){
    setUserName();
}  