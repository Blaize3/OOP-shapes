"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint-disable*/

var Vehicles = function () {
    function Vehicles(make, model, year, color, passenger, milage) {
        _classCallCheck(this, Vehicles);

        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = passenger;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    _createClass(Vehicles, [{
        key: "start",
        value: function start() {
            if (this.fuel > 0) {
                this.started = true;
                console.log("engine started...!!!");
            } else {
                this.started = false;
                console.log("engine cannot start...");
            }
        }
    }, {
        key: "accelerate",
        value: function accelerate() {
            if (this.started) {
                if (this.fuel > 0) {
                    console.log(this.speed += 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log("out of fuel.");
                    this.stop();
                }
            } else {
                alert("You need to start the engine first.");
            }
        }
    }, {
        key: "decelerate",
        value: function decelerate() {
            if (this.started) {
                if (this.fuel > 0) {
                    if (this.speed > 0) {
                        console.log(this.speed -= 1);
                        this.fuel = this.fuel - 1;
                    } else {
                        console.log(this + " has stopped moving");
                        this.fuel = this.fuel - 1;
                    }
                } else {
                    console.log("out of fuel.");
                    this.stop();
                }
            } else {
                alert("You need to start the engine first.");
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            this.started = false;
        }
    }, {
        key: "drive",
        value: function drive() {
            accelerate();
        }
    }, {
        key: "brake",
        value: function brake() {
            decelerate();
        }
    }, {
        key: "typeOfVehicle",
        value: function typeOfVehicle(wheels) {
            if (this.numberOfWheels == 8 && 8 == wheel) {
                console.log(this.model + " " + this.make + " is a Truck");
            } else if (this.numberOfWheels == 4 && 4 == wheel) {
                console.log(this.model + " " + this.make + " is a Truck");
            } else if (this.numberOfWheels == 2 && 2 == wheel) {
                console.log(this.model + " " + this.make + " is a Truck");
            } else {
                console.log("Unknown type of vehicle");
            }
        }
    }]);

    return Vehicles;
}();

exports.default = { Vehicles: Vehicles };