const ary =[{name:"saha",age:20},{name:"yogesh", age:30},{name:"varan", age:20}];

const cb =function(a,b){
    return a.name > b.name ? 1 : -1

     
}

ary.sort(cb);

console.log(ary);  