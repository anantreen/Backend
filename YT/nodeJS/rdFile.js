import fs from 'fs';
// try {
//     const data = fs.readFileSync('./apple.text', 'utf8');
//     console.log(data);
// }catch(err){
//     console.log("Error:",err);
// }
try{
    var data = fs.readFile('apple.text','utf8',(err,data )=>{
        if(!err){
            console.log(data);
        }else {
            console.log("Error :",err);
        }
    });
    console.log(data);
}
catch(err)
{
    console.log("Error :",err);
} 