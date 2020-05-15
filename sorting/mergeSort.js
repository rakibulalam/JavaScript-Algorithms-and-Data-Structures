function mergeSort(arr)
{
    const n=arr.length;
    // check if array can be split
    if(n===1) return arr;
    // get middle index
    const midIndex=Math.floor(n/2);
    // split array inot two parts
    const leftArray=arr.slice(0,midIndex);
    const rightArray=arr.slice(midIndex,n);
    // use recursion to continue splitting;
    console.log(leftArray,rightArray)
    // return merge(mergeSort(leftArray), mergeSort(rightArray));
   
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left,right){
    //create new array
    const result=[];
    // check if either left array or right array is empty
    while(left.length && right.length){
        // find the lower value 
        if(left[0]<=right[0]){
            // Add left value
            result.push(left.shift());
        }else {
            result.push(right.shift());
        }
    }
    // merge left array
    // merge right array

    return [...result, ...left, ...right];
}

const arr=[...Array(10)].map(e=>~~(Math.random()*10));
console.log(arr);
const result=mergeSort(arr);
console.log(result);