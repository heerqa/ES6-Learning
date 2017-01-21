var x=[1,2,3,6];
console.log(Math.max(...x));

function logMessage(message,...args){
    console.log(message,...args)
}

logMessage("This is logger %s : %s", "Master javascript","learn ES6");