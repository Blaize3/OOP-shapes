/*eslint-disable*/

import Vehicle from "./vehicle.js";

class Car extends Vehicle {
    constructor(make, model, year, color, milage) {
        super(make, model, year, color, milage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            // return this.started = false;
            return "no fuel";
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
                // console.log(this.model + " " + this.make + " has carried new " + (num == 1 ? "passenger" : "passengers"));
            } else {
                console.log(this.model + " " + this.make + " do not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

const bmw = new Car("BMW", "i8", "2017", "blue", 0);

export default bmw;