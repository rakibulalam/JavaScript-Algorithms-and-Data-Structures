/**
 * @description binary search algorithm
 * @complexity O(log n)
 * @prerequisites [ given array must be ordered. ex. asc, desc ]
 * @param {Array} n 
 * @param {String|Integer|Any} value 
 * @note  Binary search is faster than linear search except for small arrays
 */
function binarySearch(n,value)
{
    /** define length is the best practice */
    const length=n.length;
    /** define lowIndex and highIndex index of the collections */
    let lowIndex=0; highIndex=length-1;
    /** check given array has value */
    if(length===0) return 'not found';
    /** if given array is contain only single value*/
    if(length===1 && n[0]===value) return value;

    /** start iteration until find the value */
    while(lowIndex<=highIndex)
    {
        /** set mid index of the array*/
        
        let current=lowIndex+highIndex, midIndex=Math.floor(current/2);
        /** define the value is the best practice */
        const midValue=n[midIndex];
        /** if midValue is equal to search value return it*/
        if(midValue===value) return value;
        /** check if midValue is half of right or left value*/
        else if(midValue<value) 
        lowIndex=midIndex+1; /** increas lowIndex value from mid index */
        else
        highIndex=midIndex-1; /** decreas highIndex value from mid index */
    }
    return 'not found';
}

const n=[1,2,3,4,5,6,7,8,9,10], value=8;

const result=binarySearch(n,value);

console.log('The value is '+ result);