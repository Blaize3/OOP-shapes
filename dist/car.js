"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint-disable*/

var Car = function (_Vehicle) {
    _inherits(Car, _Vehicle);

    function Car(make, model, year, color, milage) {
        _classCallCheck(this, Car);

        var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, make, model, year, color, milage));

        _this.maxPassengers = 5;
        _this.passenger = 0;
        _this.numberOfWheels = 4;
        _this.maxSpeed = 160;
        return _this;
    }

    _createClass(Car, [{
        key: "loadPassenger",
        value: function loadPassenger(num) {
            if (this.passenger < this.maxPassengers) {
                if (num + this.passenger <= this.maxPassengers) {
                    this.passenger = num;
                    console.log(this.model + " " + this.make + " has carried new " + (num == 1 ? "passenger" : "passengers"));
                } else {
                    console.log(this.model + " " + this.make + " do not have enough space to take all passengers.");
                }
            } else {
                console.log(this.model + " " + this.make + " is full");
            }
        }
    }]);

    return Car;
}(Vehicle);

exports.default = { Car: Car };