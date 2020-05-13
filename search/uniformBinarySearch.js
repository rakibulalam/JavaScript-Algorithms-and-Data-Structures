
let delta=[];
function makeDelta(n)
{
    let power=1; i=0;
    do{
        let half=power;
        power *=2;
        delta[i]=Math.floor((n+half)/power);
    }while(delta[i++]!==0)
}

function uniformBinarySearch(n,key)
{
    let i=delta[0]-1, d=0;
    while(1)
    {
        if(key===n[i]) return n[i];
        else if(delta[d]===0) return -1;
        else{
            if(key<n[i])
            {
                i -=delta[++d]
            }else{
                i +=delta[++d];
            }
        }
    }
}
const n=[1,2,3,4,5,6,7,8,9,10], s=10, value=5;
makeDelta(s);
console.log(delta);
const result=uniformBinarySearch(n,value);
console.log(makeDelta(1), delta,result)
