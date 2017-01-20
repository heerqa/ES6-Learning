"use strict"
function blockBindinDemo(){
let roll_num=1;
var roll=3;
if(true){
    let roll_num= 786;
    console.log(roll_num);
    var roll=4
}
console.log(roll_num);
console.log(roll);
}

blockBindinDemo();

var i=0;
for(let i=0;i<4;i++){
    console.log("this in loop" +i);
}
    console.log(i);