var course={
    name:"Master JavaScript",
    publisher:"HeerSoft"
    };

 function courseDetails(c){
 let {name, publisher, price}=c;
 console.log(name + " " + publisher + " " +price);
 }

 courseDetails(course);