const arr=[...Array(10)].map(e=>~~(Math.random()*10));
const n=arr.length, j=0, k=n, l, m;

for(let i=0;i<n; i++)
{
    const temp=arr[n-i-1];
    if(arr[i]>arr[n-i-1])
    {
      arr[n-i-1]=arr[i];
      arr[i]=temp;
    
      if(arr[j]>arr[i])
      {
          
      }
      
       j=i, k=n-i-1;
    }
}