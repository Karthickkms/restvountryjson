var obj1 = {
    name:"person1",
age:5
};
var obj2 ={
    age:5,
    name:"person1",

};
let flag=true;

if(Object.keys(obj1).length ==Object.keys(obj2).length){
    for (key in obj1){
        if (obj1[key]==obj2[key]){
            continue;
        }
        else{
            flag=false;
            break;
        }
    }
}
else{
    flag=false;
}
//print true if the two JSON are same//
console.log(flag);

// 4) TASK1:
// 2)
var myvar= 1;
console.log("myvar");

// 3)

var firstName="Elangovan";
var lastName="Kl";
var martialStatus="Single";
var country="India";
var age=28;
console.log(firstName,lastName,martialStatus,country,age);

// 7)
// Truthy:
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")

// Falsy:
// false,0,-0,on,Nan,undefined

