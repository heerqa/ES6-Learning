var helloWorld= function(name, greeeting){
    return name +" " + greeeting;
}

console.log(helloWorld("Shagufta","HI!"))

var greetings=(name, greeeting)=>{
    return name +" " + greeeting;
}

console.log(greetings("Heer","HI!!"));

var newGreeeting1=(name, greetings)=> name +" " + greetings;
console.log(newGreeeting1("Naz","HI!!!"));

var newGreeeting2= greetings=> " " + greetings;
console.log(newGreeeting2("HI!!!"));

var newGreeeting3=()=> " Hello";
console.log(newGreeeting3());

function Course(){
this.name="Master ES6";
this.description="the next level";
this.author="Heer";
this.getSummary=()=>{
   return this.name+" "+ this.description;
}


}

var course= new Course();

console.log(course.getSummary());