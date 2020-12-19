var boxToggle1 = false;
var boxToggle2 = false;
var boxToggle3 = false;
var boxToggle4 = false;
var boxToggle5 = false;

var box1 = document.getElementById("block1");
box1.addEventListener("click", function () {
  boxToggle1 = !boxToggle1;
  if (boxToggle1) {
    box1.style.zIndex = 2;
  } else {
    box1.style.zIndex = -1;
  }
});

var box2 = document.getElementById("block2");
box2.addEventListener("click", function () {
  boxToggle2 = !boxToggle2;
  if (boxToggle2) {
    box2.style.zIndex = 2;
  } else {
    box2.style.zIndex = -1;
  }
});

var box3 = document.getElementById("block3");
box3.addEventListener("click", function () {
  boxToggle3 = !boxToggle3;
  if (boxToggle3) {
    box3.style.zIndex = 2;
  } else {
    box3.style.zIndex = -1;
  }
});

var box4 = document.getElementById("block4");
box4.addEventListener("click", function () {
  boxToggle4 = !boxToggle4;
  if (boxToggle4) {
    box4.style.zIndex = 2;
  } else {
    box4.style.zIndex = -1;
  }
});

var box5 = document.getElementById("block5");
box5.addEventListener("click", function () {
  boxToggle5 = !boxToggle5;
  if (boxToggle5) {
    box5.style.zIndex = 2;
  } else {
    box5.style.zIndex = -1;
  }
});
