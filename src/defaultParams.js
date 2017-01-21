function implementDefault(name="heer", age=25){

    return name +" "+ age;
}

function implementDefaultAnother(name, age){
    name=name||"Heer";
    age=age||21;
    return name +" "+ age;
}

console.log(implementDefault());

console.log(implementDefault("Naz",52));
console.log(implementDefault("Naz"));
console.log("Another way ---------------------");
console.log(implementDefaultAnother());

console.log(implementDefaultAnother("Naz",52));
console.log(implementDefaultAnother("Naz"));
