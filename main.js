var i = 0;
var names = ["Sunil Nair", "Trupti Nair", "Neil Nair"];

var images = ["father.jpg", "mother.jpg", "me.jpg"];

function changeSlide() {
  document.getElementById("names").innerHTML = names[i];
  document.getElementById("img1").src = images[i];
  i++;

  if(names[i]==undefined){
    names[i] = names[names.length-1];
    images[i] = images[images.length-1];
  }
}