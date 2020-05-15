function insertionSort(arr)
{
    const n=arr.length;

    for (let i = 0; i < n; i++)
    {
       let currentValue=arr[i], prevIndex=i-1;
       while (prevIndex>=0 && arr[prevIndex]>currentValue)
       {
           arr[prevIndex+1]=arr[prevIndex];
           prevIndex=prevIndex-1;
       }
       arr[prevIndex+1]=currentValue;

    }
    return arr;
}
const arr=[...Array(10)].map(e=>~~(Math.random()*10));
console.log(arr);
const result=insertionSort(arr);
console.log(result);