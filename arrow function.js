const add = function(a,b){
    return a+b;

};
const addArrow = (a,b) => a + b;


const squre = a => a*a;

const squreObj = a => ({squre: a*a});

const getArguments = (...x) => { 
    console.log(x);
};
//getArguments(1,2)


const Car =function(color){
    let setColor = () => {
    this._color = color;
    }
    setColor();
}
const blueCar = new Car('blue');
console.log(blueCar);