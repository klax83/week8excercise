var div1 = document.createElement('div');
div1.className = "class1 class2";

document.body.appendChild(div1);

document.getElementsByClassName('class2')[0].style.backgroundColor = 'lavender';

var div2 = document.createElement('div');
div2.id = "divId";

var h01 = document.createElement('h1');
h01.textContent = "Some text";

div2.appendChild(h01);
document.body.appendChild(div2);

var div3 = document.createElement('div');
div3.id = "anotherdiv";

var h02 = document.createElement('h1');
var t = document.createTextNode('some more text');
h02.appendChild(t);
div3.appendChild(h02);

var imageholder = document.createElement('img');
var button = document.createElement('button');

imageholder.src = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg';
imageholder.className = "class1 image";
imageholder.alt = "owl"
button.className = "btn btn-primary";
button.textContent = "CLICK";

document.body.appendChild(imageholder);
document.body.appendChild(button);

function imgSwap() {
	document.getElementsByClassName('image')[0].src = "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg";
	document.getElementsByClassName('image')[0].alt = "flamingo";
}

button.onclick = imgSwap;

document.body.className = "text-center";
