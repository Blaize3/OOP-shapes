/*eslint-disable*/

import Vehicle from "./vehicle.js";

class Bike extends Vehicle {
    constructor(make, model, year, color, milage) {
        super(make, model, year, color, milage);
        this.passenger = 0;
        this.maxPassengers = 2;
        this.maxSpeed = 80;
        this.numberOfWheels = 2;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            // return this.started = false;
            return "engine cannot start...";
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                // console.log(this.model + " " + this.make + " has carried new " + (num == 1 ? "passenger" : "passengers"));
            } else {
                console.log(this.model + " " + this.make + " do not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

const suzuki = new Bike("Suzuki", "BK201", "2015", "black", 0);

export default suzuki;