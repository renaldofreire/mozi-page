let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozi_logo.png') {
        myImage.setAttribute('src', 'images/mozi_logo2.png')
    } else {
        myImage.setAttribute ('src','images/mozi_logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

// || significa OU

function defineUserName() {
    let myName = prompt('Por favor, insira seu nome.');
    if(!myName || myName === null) {
        defineUserName();
    } else {
        localStorage.setItem('nome', myName);
        myHeader.textContent = 'Mozilla é massa, ' + myName;
    }
}

if(!localStorage.getItem('nome')) {
    defineUserName();
} else {
    let nameStorage = localStorage.getItem('nome');
    myHeader.textContent = 'Mozilla é massa, ' + nameStorage;
}

myButton.onclick = function() { defineUserName ();
}
