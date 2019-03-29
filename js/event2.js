let dotArray = [];

for (let i=0;i<10;i++)
{
  let dot = document.createElement("div");

  dot.className = "trail";
  document.body.appendChild(dot);
  dotArray.push(dot);

}

let newDot = 0;

const mouseMoving = (evt) => {

  console.log("mouse moving");

  dotArray[newDot].style.left = (evt.pageX) + "px";
  dotArray[newDot].style.top= (evt.pageY) + "px";

  newDot = (newDot + 1)% dotArray.length;

};
document.addEventListener('mousemove', mouseMoving);


