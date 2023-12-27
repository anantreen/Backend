// How to Get Command line Inputs :

console.log(process.argv);
console.log(process.argv.slice(2));

var myArg = process.argv.slice(2);
switch (myArg[0]){
    case 'anant':
        console.log("My 1st argument :",myArg[0]);
        break;
    case 'bhumika':
        console.log("My 2nd argument :",myArg[1]);
        break;
    default:
        console.log("Default :",myArg[0]);
        break;
}