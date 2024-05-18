// Task 1

const carInfoBtn = document.getElementById("car-info");
const timeCalcBtn = document.getElementById("car-calc");

class Car {
  maker: string;
  model: string;
  year: number;
  avgSpeed: number;
}

const sampleCar: Car = {
  maker: "Aston Martin",
  model: "DB9",
  year: 2011,
  avgSpeed: 80,
};

function showCarInfo(): void {
    const carInfo: string = "Maker: " + sampleCar.maker +
        "\nModel: " + sampleCar.model +
        "\nYear: " + sampleCar.year +
        "\nAverage Speed " + sampleCar.avgSpeed;

    alert(carInfo)
}

function calculateTime(): void {
    const distance: number = Number(prompt("Enter distance: "))
    const drivingTime: number = distance / sampleCar.avgSpeed;
    const breakTimes: number = drivingTime % 4 == 0
                                    ? drivingTime / 4 - 1
                                    : Math.floor( drivingTime / 4)
    alert(drivingTime + breakTimes)
}

// Task 2

function getGCD(a: number, b: number): number {
    if (a < b) {
        let temp = a;
        a = b;
        b = temp;
    }
    while (b !=0 ) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

class Fraction {
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    reduce(): void {
        const gcd = getGCD(this.numerator, this.denominator);
        if ( gcd == 1) {
            return;
        }
        this.numerator /= gcd;
        this.denominator /= gcd;
    }

    add(other: Fraction): Fraction {
        const sumDenominator: number = this.denominator * other.denominator;
        const sumNumerator: number = this.numerator * other.denominator + other.numerator * this.denominator
        const sum: Fraction = new Fraction(sumNumerator, sumDenominator);
        sum.reduce();
        return sum;
    }

    subtract(other: Fraction): Fraction {
        const diff: Fraction = this.add(new Fraction(-other.numerator, other.denominator));
        diff.reduce();
        return diff;
    }

    multiply(other: Fraction): Fraction {
        const prodDenominator: number = this.denominator * other.denominator;
        const prodNumerator: number = this.numerator * other.numerator;
        const prod: Fraction = new Fraction(prodNumerator, prodDenominator);
        prod.reduce();
        return prod;
    }

    divide(other: Fraction): Fraction {
        const fraction: Fraction = this.multiply(new Fraction(other.denominator, other.numerator));
        fraction.reduce();
        return fraction;
    }

    toString(): string {
        return this.numerator + "/" + this.denominator;
    }
}

const fraction1 = new Fraction(12, 9);
const fraction2 = new Fraction(2, 4);

function addFraction(): void {
    alert(fraction1 + " + " + fraction2 + " = " + fraction1.add(fraction2))
}

function subtractFraction(): void {
    alert(fraction1 + " - " + fraction2 + " = " + fraction1.subtract(fraction2))
}

function multiplyFraction(): void {
    alert(fraction1 + " * " + fraction2 + " = " + fraction1.multiply(fraction2))
}

function divideFraction(): void {
    alert(fraction1 + " / " + fraction2 + " = " + fraction1.divide(fraction2))
}

function reduceFraction(): void {
    console.log("Before reduction " + fraction1);
    fraction1.reduce();
    console.log("After reduction " + fraction1);
}