
import { applyMixins } from "./mixin/applyMixin.js";
class Car {
    powerOn(): void {
        console.log("Car is powered on.");
    }

    powerOff(): void {
        console.log("Car is powered off.");
    }

}

class Specification {
    description: string;
    constructor(description: string) {
        this.description = description;
    }
}

class Vehicle {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

interface Vehicle extends Car, Specification {}

applyMixins(Vehicle, [Car, Specification]);

const vehicle1 = new Vehicle("Fusca");

