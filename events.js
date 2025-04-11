let button = document.getElementById('clickHere-btn');   //Finding the element
button.addEventListener('mousedown',displayMessageOnMouseDown); //Adding event listener to the element
//Defining the event function
function displayMessageOnMouseDown(){     
    let newElement= document.createElement('p');
    newElement.textContent = 'You have pressed mouse button down on Click Here button!';
    newElement.className = 'about-text';
    button.after(newElement);
}

//Keyboard events
let editBox = document.getElementById('enterText');
editBox.addEventListener('keydown', displayMessageOnKeyDown);
function displayMessageOnKeyDown(event){
    let newElement = document.createElement('p');
    newElement.textContent = 'You have pressed "${event.key}" in the edit box';
    newElement.className = 'about-text';
    editBox.after(newElement);
}  

//Form Events
//Event Focus
let nameEditBox = document.getElementById('name');
nameEditBox.addEventListener('focus', displayMessageOnFocus);
function displayMessageOnFocus(){
    let newElement = document.createElement('p');
    newElement.textContent = 'Please ebter your name here';
    newElement.className = 'about-text';
    nameEditBox.after(newElement);
}

//Event Blur
let emailEditBox = document.getElementById('email');
emailEditBox.addEventListener('blur', displayMessageOnLosingFocus);
function displayMessageOnLosingFocus(){
    if(!this.value){
    let newElement = document.createElement('p');
    newElement.textContent = 'Email is mandatory field and cannot be left blank';
    newElement.className = 'about-text';
    nameEditBox.after(newElement);
    }
    else{
    let newElement = document.createElement('p');
    newElement.textContent = 'Thank you for providing email';
    newElement.className = 'about-text';
    emailEditBox.after(newElement);
    }
}


//Window Event
window.addEventListener('resize', displayMessageOnWindowResize);
function displayMessageOnWindowResize(){
    let submitButton = document.getElementById('submit-btn');
    let newElement = document.createElement('p');
    newElement.textContent = 'The window is resized to '${window.innerHeight} X ${window.innerWidth}'';
    newElement.className = 'about-text';
    emailEditBox.after(newElement);
}


// add in index.html File
// <script src="events.js"></script>