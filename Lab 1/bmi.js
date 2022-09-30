//Class
class BMI {
    // Constructor
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //Method to calculate BMI
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}
// Creating Object
let bmi1 = new BMI(1, 65);

//Invoking and displaying
console.log(bmi1.calculateBMI());