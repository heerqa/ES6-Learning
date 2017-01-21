function * samples(){
    console.log("ES6 scripts");
    yield "Heer";
    yield "Naz";
}

let sample= samples();
console.log(sample.next());
console.log(sample.next());