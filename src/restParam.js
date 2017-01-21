function getRestParamExample(name, age, ...certifacation){
    console.log(name);
    console.log(age);
    for(cert in certifacation){
        console.log(certifacation[cert]);
    }
}

getRestParamExample("heer",25,"java", "java certificate", "spring");