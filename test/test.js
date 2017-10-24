/*eslint-disable*/
// import bmw from "../src/app.js";
//import bmw from "../src/app.js";
import suzuki from "../src/bike.js";
import bmw from "../src/car.js";
import mack from "../src/truck.js";
import { assert } from "chai";



describe("Test for Polymorphism", () => {

    // Handle valid input
    describe("handle valid inputs", () => {
        it("should no fuel", () => {
            assert.equal(bmw.start(), "no fuel");
        });

        it("should return engine cannot start...", () => {
            assert.equal(suzuki.start(), "engine cannot start...");
        });

        it("should return false", () => {
            assert.equal(mack.start(), false);
        });
    });
});