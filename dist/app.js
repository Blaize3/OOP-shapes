"use strict";

var _bike = require("./bike");

var _bike2 = _interopRequireDefault(_bike);

var _car = require("./car");

var _car2 = _interopRequireDefault(_car);

var _truck = require("./truck");

var _truck2 = _interopRequireDefault(_truck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bmw = (0, _car2.default)("BMW", "i8", "2017", "blue", 0);
var mack = (0, _truck2.default)("Mack", "GT700s", "2017", "white", 100);
var suzuki = (0, _bike2.default)("Suzuki", "BK201", "2015", "black", 0);

bmw.loadPassenger(2);