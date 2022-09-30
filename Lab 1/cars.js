//Class
class Vehicle {
    //Constructor
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Method
    Information() {
        console.log("\nThe make of the car is " + this.make);
        console.log("The model of the car is " + this.model);
        console.log("The year of the car is " + this.year);
    }

}

//Child of Vehicle
class Cars extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    //Method
    Information() {
        // Calls parent method
        super.Information();
        console.log("There are " + this.doors + " doors on this car");
    }
}

//Creating objects passing params through
let car1 = new Vehicle("Volkswagen", "Golf", "2008");
car1.Information();

let car2 = new Cars("Audi", "A6", "2022", "4");
car2.Information();