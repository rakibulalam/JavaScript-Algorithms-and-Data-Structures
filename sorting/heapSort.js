const heapSort=(arr)=>{
    const n=arr.length;
    let i=Math.floor((n/2))-1;
    let k=n-1;
    while(i>=0)
    {
        heapify(arr,n,i);
        i--;
    }
    while(k>=0)
    {
        [arr[0],arr[k]]=[arr[k],arr[0]]
        heapify(arr,k,0);
        k--;
    }
    return arr;
}
const heapify=(arr, length, index)=>{
    let largest=index, left=index*2, right=(index*2)+1;
    if(left<length && arr[left]>arr[largest])
    {
        largest=left;
    }
    if(right<length && arr[right]>arr[largest])
    {
        largest=right;
    }
    if(largest!==index)
    {
        [arr[index],arr[largest]]=[ arr[largest],arr[index]];
        heapify(arr,length,largest);
    }
    return arr;
}

const arr = [1,5,6,9,10,25,4,3,5];

const result=heapSort(arr);

console.log(result);