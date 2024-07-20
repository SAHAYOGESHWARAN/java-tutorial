const profile = {
    name:"saha",
    children:[
        {
            name:"gokul",
            getNmae(){
                return this.name
            }
        }
    ],
    getName(){
        return this.name
    }
};

//console.log(profile.getName());
//console.log(profile.children[0].getNmae());

const getNameLoose =profile.getName;

console.log(getNameLoose());