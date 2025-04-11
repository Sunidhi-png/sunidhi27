
//creating new element in DOM
let newElement = document.createElement('p');
newElement.textContent = 'This element is added by JS!!';
document.body.appendChild(newElement); 

//editing the element in DOM
let giveheadingname = document.getElementById('about-title');
giveheadingname.textContent = 'This Element is edited by JS!!';

//
let clickHereButton = document.getElementById('tagName');
let parent = clickHereButton.parentNode;
parent.removeChild(child);
// add <script src="domManipulation.js"></script> in index.heml document