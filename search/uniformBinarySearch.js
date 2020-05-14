
/**
 * @description Uniform binary search is an optimization of the classic binary search algorithm invented by Donald Knuth and given in Knuth's The Art of Computer Programming. 
It uses a lookup table to update a single array index, rather than taking the midpoint of an upper and a lower bound on each iteration; therefore, it is optimized for architectures (such as Knuth's MIX) on which
->a table lookup is generally faster than an addition and a shift, and
->many searches will be performed on the same array, or on several arrays of the same length
 */
let delta=[]; // lookup table
/**
 * 
 * @param {Intiger} s size of array 
 */
function makeDelta(s)
{
    let power=1; i=0;
    do{
        let half=power;
        power *=2;
        delta[i]=Math.floor((s+half)/power);
    }while(delta[i++]!==0)
}
/**
 * @description uniform binary search algorithm
 * @complexity O(log arr)
 * @param {Array} arr
 * @param {String|Integer|Any} value
 * @return {Number|String}
 */
function uniformBinarySearch(arr,value)
{
    /** define first index of lookup table */
    let i=delta[0]-1, d=0;
    
    while(1)
    {
        /** define current value */
        const currentValue=arr[i];
        /** check the value is matched */
        if(value===currentValue) return currentValue;
        /** if lookup table limit end*/
        else if(delta[d]===0) return 'not found';
        else{
            /** if current value is greater than to lookup table value*/
            if(value<currentValue)
            {
                i -=delta[++d];
            }else{
                i +=delta[++d];
            }
        }
    }
}
const arr=[1,2,3,4,5,6,7,8,9,10], s=10, value=2;

/** create lookup table*/
makeDelta(s);

const result=uniformBinarySearch(arr,9);

console.log('The value is '+result);
