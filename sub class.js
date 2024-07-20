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

class ToyCar extends Car{
    constructor(color,model){
        super(color);
        this._model = model;
    }

    getModel(){
        return this._model;
    }
}

const speedyBlueCar =new ToyCar('blue','speedy');
console.dir(speedyBlueCar);



const blueCar = new Car('blue');
console.dir(blueCar._color); 



