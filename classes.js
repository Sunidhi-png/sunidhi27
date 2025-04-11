class car {
    //properties
    manufacturer;
    model;
    color;
    numofWheels;
    #price;  //private property
  

    // constructor(){
    //     this.manufacturer = 'Tata';
    //     this.model = 'Default';
    //     this.color = 'White';
    //     this.numofWheels = 4; //this is pointer 
    // }

    constructor(manufacturer, model, color, price){
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.numofWheels = 4; // by default it is 4 so will keep this as 4   //this is pointer
        this.#price = price; 
    }


    //methods
    start(){
        console.log('car has started');
    }

    stop(){
        console.log('car has stopped');
    }

    GetPrice(){
        return this.#price;
    }

    // setprice(price){
    //     this._price = price;
    // }
}


// let car1 = new car(); //object
// car1.manufacturer = 'Maruti Suzuki';
// car1.model = 'Baleno';
// car1.color = 'Blue';
// car1.numofWheels = 4;
// console.log('car1 manufacturer: ${car1.manufacturer}');
// console.log('car1 model: ${car1.model}');
// console.log('car1 color: ${car1.color}');
// console.log('car1 Number of Wheels: ${car1.numofWheels}');
// console.log('Starting the car:');
// car1.start();
// console.log('Stopping the car');
// car1.stop();


let car2 = new car('Hyundai', 'Verna', 'Black', 150000); //object
console.log('car2 manufacturer: ${car2.manufacturer}');
console.log('car2 model: ${car2.model}');
console.log('car2 color: ${car2.color}');
console.log('car2 Number of Wheels: ${car2.numofWheels}');
console.log('car2 price: ${car2.GetPrice()}');
console.log('Starting the car:');
car2.start();
console.log('Stopping the car');
car2.stop();

console.log(car2);

// let jsonString = JSON.stringify(car2);
// console.log(jsonstring);

// let objectFronJson = JSON.parse(jsonstring);
// console.log(objectFromJson.manufacturer, typeofobjectFromJson.manufacturer);   //typeof to know the type of object
// console.log(objectFromJson.model);
// console.log(objectFromJson.color);
// console.log(objectFromJson.numofwheels);

//changes for clonedrepo