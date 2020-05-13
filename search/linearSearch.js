/**
 * 
 * @description linear search algorithm.
 * @complexity O(n)
 * @param {Array} n 
 * @param {String|Integer|Any} value 
 * @method linearSearch
 * @return String|Integer
 */
function linearSearch(n, value)
{
    /**predfined the length best practice */
    const length=n.length;
    /** check the minimum traversing throw the array */
    if(length===0) return 'not found';
    /** ensure the given array is contain multiple value */
    if(length===1 && n[0]===value) return value;

    /** use the for loop instead other approach. even its better perfome for of */
    for(let i=0; i<length; i++)
    {
        /** check the value is matched */
        if(n[i]===value)return value;
    }
    return 'not found';
}
/** define the params */
const n=[1,2,5,6,8,9,10], value=6;

const result=linearSearch(n, value);

console.log('The value is '+ result);