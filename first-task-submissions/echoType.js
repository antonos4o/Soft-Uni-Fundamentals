function echoType(input){

    if(typeof input == "string" || typeof input == "number"){
        console.log(typeof input);
        console.log(input);
    }else{
        console.log(typeof input);
        console.log(`Parameter is not suitable for printing`);
    }
}
// ****Checks below****
// echoType("Hello");
// echoType(5);
// echoType(null);
// echoType(undefined)