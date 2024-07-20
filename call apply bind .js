const profile ={
    name:"saha",
    age: 25,

};

const setProfile = function(name,age){
this.name = name;
    this.age =age;

};

//setProfile.call(profile,'saha', );
//console.log(profile);
//setProfile.bind(profile,['saha',25]);

const boundProfile =setProfile.bind(profile);
console.dir(boundProfile);
boundProfile('gokulu', 21);

console.log(profile);