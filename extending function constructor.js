const car = function(color) {
    this._color = color;
};

car.prototype.getColor = function() {
    return this._color;
};

const ToyCar = function(color, model) {
    car.call(this, color); // Call the parent constructor with the color argument
    this._model = model;   // Initialize the model property
};

// Inherit from car prototype
ToyCar.prototype = Object.create(car.prototype);
ToyCar.prototype.constructor = ToyCar;

// Add getModel method to ToyCar prototype
ToyCar.prototype.getModel = function() {
    return this._model;
};

const speedyBlueCar = new ToyCar('blue', 'speedy');

console.log(speedyBlueCar.getColor(), speedyBlueCar.getModel()); // Output: blue speedy
