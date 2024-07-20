const x = () => {
    let i =0;
    let j =1;

    const returnX =() => {
        j++;
        console.log(i);
    }
    };

return {
    returnX
}
console.log(x().returnX());