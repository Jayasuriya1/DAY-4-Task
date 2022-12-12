// Object Comparison

var obj1 = {
    name: "Suriya",
    age : 45

};
var obj2 = {
    age :45,
    name : "suriya"
};

let isequal = true;

for (var key in obj1) {
      if (obj1[key] !== obj2[key]){
        isequal = false;
        break;
    }
 }
 console.log(isequal);