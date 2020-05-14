function jumpSearch(arr, value)
{
    let n=arr.length, step=Math.floor(Math.sqrt(n)), prev=0;
    console.log(step,prev)

    while (arr[Math.min(step,n)-1]<value)
    {
        prev=step;
        step+=Math.floor(Math.sqrt(n));
        if(prev>=n) return -1;
    }
    while (arr[prev]<value)
    {
        prev++;
        if(prev===Math.min(step,n)) return -1;
    }
    if(prev===value) return prev;
    return -1;
}
const arr=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], value=89;

const result=jumpSearch(arr,value);

console.log('The value is '+ result);