const ary = [{name:"saha", age:20},{name:"gokul", age:30},{name:"stepan", age:10},];

const cb = function(element){
    return element.age === 10; 
}

let hasSomeTwo =ary.some(cb)

console.log(hasSomeTwo);