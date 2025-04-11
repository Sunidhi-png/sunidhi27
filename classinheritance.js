class car {
    //properties
    manufacturer;
    model;
    color;
    numofWheels;
    //_price; //protected property

    constructor(manufacturer, model, color, price){
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.numofWheels = 4; // by default it is 4 so will keep this as 4   //this is pointer
    }
}

//methods
start(){
    console.log('car has started');
}

stop(){
    console.log('car has stopped');
}

class EVCar extends car{
    batteryType;
    constructor(manufacturer, model, color, batteryType){
        super(manufacturer, model, color); //parentclass constructor
        this.batteryType = batteryType;    // childclass constructor wich is not present in parent class constructor
    }

    makenoise(){
        console.log('EV cars are silent, They dont make noise');
    }
}


let EVCar1 = new EVCar('Mahindra', 'BE6', 'Red', 'Lithium Ion');
console.log('EVCar1 manufacturer: ${EVCar1.manufacturer}');
console.log('EVCar1 model: ${EVCar1.model}');
console.log('EVCar1 color: ${EVCar1.color}');
console.log('EVCar1 Number of Wheels: ${EVCar1.numofWheels}');
console.log('EVCar1 Battery Type: ${EVCar1.batteryType}');
console.log('Starting the car:');
EVCar1.start();
console.log('Stopping the car');
EVCar1.stop();
console.log('Make some noise');
EVCar1.makenoise();


//this comment is added to branch1_js