"use strict";

//key event

let balloon = document.querySelector('p');
let fontSize = 15;
let fontUnit = "px";

function Resizing(node,percent) {

  fontSize += fontSize * percent;
  node.style.fontSize = fontSize + fontUnit;

}

const resizeBalloon = (evt) => {

  //console.log(evt);
  if (evt.key === 'ArrowUp') {

    console.log('Up');
    Resizing(balloon,0.1);
    evt.preventDefault();

  } else if (evt.key === 'ArrowDown') {

    console.log('Down');
    Resizing(balloon,-0.1);
    evt.preventDefault();

  }

  if (fontSize > 80) {

    balloon.textContent= '💥';

    document.removeEventListener('keydown', resizeBalloon);

  }
};
Resizing(balloon,0);

document.addEventListener('keydown', resizeBalloon);