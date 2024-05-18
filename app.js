// Task 1
var carInfoBtn = document.getElementById("car-info");
var timeCalcBtn = document.getElementById("car-calc");
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var sampleCar = {
    maker: "Aston Martin",
    model: "DB9",
    year: 2011,
    avgSpeed: 80,
};
function showCarInfo() {
    var carInfo = "Maker: " + sampleCar.maker +
        "\nModel: " + sampleCar.model +
        "\nYear: " + sampleCar.year +
        "\nAverage Speed " + sampleCar.avgSpeed;
    alert(carInfo);
}
function calculateTime() {
    var distance = Number(prompt("Enter distance: "));
    var drivingTime = distance / sampleCar.avgSpeed;
    var breakTimes = drivingTime % 4 == 0
        ? drivingTime / 4 - 1
        : Math.floor(drivingTime / 4);
    alert(drivingTime + breakTimes);
}
// Task 2
function getGCD(a, b) {
    if (a < b) {
        var temp = a;
        a = b;
        b = temp;
    }
    while (b != 0) {
        var temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}
var Fraction = /** @class */ (function () {
    function Fraction(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    Fraction.prototype.reduce = function () {
        var gcd = getGCD(this.numerator, this.denominator);
        if (gcd == 1) {
            return;
        }
        this.numerator /= gcd;
        this.denominator /= gcd;
    };
    Fraction.prototype.add = function (other) {
        var sumDenominator = this.denominator * other.denominator;
        var sumNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
        var sum = new Fraction(sumNumerator, sumDenominator);
        sum.reduce();
        return sum;
    };
    Fraction.prototype.subtract = function (other) {
        var diff = this.add(new Fraction(-other.numerator, other.denominator));
        diff.reduce();
        return diff;
    };
    Fraction.prototype.multiply = function (other) {
        var prodDenominator = this.denominator * other.denominator;
        var prodNumerator = this.numerator * other.numerator;
        var prod = new Fraction(prodNumerator, prodDenominator);
        prod.reduce();
        return prod;
    };
    Fraction.prototype.divide = function (other) {
        var fraction = this.multiply(new Fraction(other.denominator, other.numerator));
        fraction.reduce();
        return fraction;
    };
    Fraction.prototype.toString = function () {
        return this.numerator + "/" + this.denominator;
    };
    return Fraction;
}());
var fraction1 = new Fraction(12, 9);
var fraction2 = new Fraction(2, 4);
function addFraction() {
    alert(fraction1 + " + " + fraction2 + " = " + fraction1.add(fraction2));
}
function subtractFraction() {
    alert(fraction1 + " - " + fraction2 + " = " + fraction1.subtract(fraction2));
}
function multiplyFraction() {
    alert(fraction1 + " * " + fraction2 + " = " + fraction1.multiply(fraction2));
}
function divideFraction() {
    alert(fraction1 + " / " + fraction2 + " = " + fraction1.divide(fraction2));
}
function reduceFraction() {
    console.log("Before reduction " + fraction1);
    fraction1.reduce();
    console.log("After reduction " + fraction1);
}
