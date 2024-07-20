const add = function(a,b){
    return a + b;

};

let total = add(1,2);

const Car = function(color){
    if(!new.target) throw "car must be called with new keyword"
    this._color = color;
};

const blueCar = new Car('blue');
const redCar = new Car('red');
const grayCar = Car('gray');
console.log(window._color);