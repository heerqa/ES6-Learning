var numbers=[1,2,3,4,5,6,7,8,9,10];
var [first,second,...last]=numbers;

console.log(last);

function arrayDestructuring([first,second,...rest]){
    console.log(first);
    console.log(second);
    console.log(rest);
}

arrayDestructuring(numbers);