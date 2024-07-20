const counter = () => {
    let i = 0;
  
   return{
    add(val){
        i+= val;
     return this;
    },
    subtract(val){
        i -= val;
        return this;
   },
   print(){
    return i;
   }
};
}
const outerCounter = counter();
//console.log(outerCounter);
let output = outerCounter
   .add(2)
   .add(2)
   .add(2)
   .subtract(1)
   .print();

console.log(output);
