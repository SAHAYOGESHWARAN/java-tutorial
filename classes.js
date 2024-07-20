class Car {
    constructor(color) {
        this._color = color;
    }

    getColor() {
        return this._color;
    }

    setColor(color) {
        this._color = color;
    }
}

const blueCar = new Car('blue');
console.dir(blueCar._color); 


// Output: 'blue'
