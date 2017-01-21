var [x,y,z]=[1,2,3];
[x,y]=[y,x]
console.log(x);

function getParam(){
               return [100,102,103];
                 };

     var [,n] =getParam();
       //console.log(m);
       console.log(n);


 function currentDate(){return {
    d:20,m:01,y:17
    }}

    var{m:month, y:year}= currentDate();
    console.log(month);
    console.log(year);

    var {m,d}=currentDate();
       console.log(m);
        console.log(d);
