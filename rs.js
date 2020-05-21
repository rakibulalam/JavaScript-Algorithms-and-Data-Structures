'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



// Complete the packNumbers function below.
function packNumbers(arr) {

let nearest=[];
for(let i=0; i<arr.length; i++)
{
    if(arr[i]===arr[i+1])
    {
        if(nearest.length>0)
        {
                const [value,count]=nearest[nearest.length-1].split(':');
                if(value===arr[i].toString())
                {
                    nearest.push(arr[i]+':'+(parseInt(count)+1))
                }else{

                    nearest.push(arr[i]+':'+2)
                }
                }else{
                    nearest.push(arr[i]+':'+2)
                }
        
       
         }
   
   
        }
return nearest;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const res = packNumbers(arr);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
