/*eslint-disable*/

import Vehicle from "./vehicle.js";

class Truck extends Vehicle {
    constructor(make, model, year, color, milage) {
        super(make, model, year, color, milage);
        this.passengers = 0;
        this.maxPassengers = 3;
        this.numberOfWheels = 8;
        this.maxSpeed = 100;
        this.hasCarrige = false;
        this.isLoaded = false;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }

    load() {
        if (this.hasCarrige) {
            if (this.isLoaded) {
                console.log(this.model + " " + this.make + " is fully loaded.");
            } else {
                console.log(this.model + " " + this.make + " is loading ...");
                console.log(this.model + " " + this.make + " is loaded.");
            }
        } else {
            console.log(this.model + " " + this.make + " has no carriage.");
        }
    }
}

const mack = new Truck("Mack", "GT700s", "2017", "white", 100);

export default mack;