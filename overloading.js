
function greet(){
    console.log('Hello User!');
}

function greet(firstname){
    console.log('Hello ${firstname}');
}

function greet(firstname,age){
    console.log('Hello ${firstname}.\nYou are ${age} years old');
}

greet();
greet('Sunidhi');
greet('Sunidhi', 25);